import { useState } from "react"
import Legend from "./components/Legend"
import "./App.css"
import Object from "./components/Object"
import objs from "./objects"

import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Checkbox from "@mui/material/Checkbox"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

import { Button } from "@mui/material"
const objsCopy = structuredClone(objs)

function App() {
 
  const [objects, setObjects] = useState(objs)
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)

  const handleToggle = (value) => () => {
    const currentIndex = objects.indexOf(value)
    const newChecked = [...objects]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setObjects(newChecked)
  }

  const handleFilter = () => {
   objects.forEach( obj => {
      obj.dataPlan = obj.dataPlan.filter(item => 
         (item.date > start)&&(item.date < end)
       )
    })

    objects.forEach( obj => {
      obj.dataFact = obj.dataFact.filter(fact => 
        obj.dataPlan.find(plan => fact.name===plan.name)
       )
    })
    setObjects([...objects])

  }

  const handleReset = () => {
    setObjects(objsCopy)
  }
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        {objs.map((value) => {
          return (
            <ListItem key={value.name}>
              <ListItemButton onClick={handleToggle(value)} dense>
                <ListItemIcon>
                  <Checkbox checked={objects.indexOf(value) !== -1}/>
                </ListItemIcon>
                <ListItemText primary={value.name} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Дата начала"
          value={start}
          onChange={(newValue) => setStart(newValue)}
        />
        <DatePicker
          label="Дата окончания"
          value={end}
          onChange={(newValue) => setEnd(newValue)}
        />
      </LocalizationProvider>

      <Button onClick={handleFilter}>Отфильтровать по дате</Button>
      <Button onClick={handleReset}>Сбросить фильтр</Button>
      <Legend />

      {objects.map((object, index) => (
        <Object key={index} object={object} />
      ))}
    </>
  )
}

export default App
