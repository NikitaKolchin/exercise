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

import Box from "@mui/material/Box"
import ListSubheader from "@mui/material/ListSubheader"
import Grid from "@mui/material/Grid"

import { Button } from "@mui/material"
const objsCopy = structuredClone(objs)

function App() {
  const [checked, setChecked] = useState(objs.map((item) => item.name))
  const [objects, setObjects] = useState(objs)
  const [filtred, setFiltred] = useState(false)
  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]
    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  const handleFilter = () => {
    objects.forEach((obj) => {
      obj.dataPlan = obj.dataPlan.filter(
        (item) => item.date > start && item.date < end
      )
    })

    objects.forEach((obj) => {
      obj.dataFact = obj.dataFact.filter((fact) =>
        obj.dataPlan.find((plan) => fact.name === plan.name)
      )
    })
    setObjects([...objects])
    setFiltred(true)
  }

  const handleReset = () => {
    setObjects(structuredClone(objsCopy))
    setFiltred(false)
  }
  return (
    <Box sx={{ maxWidth: 1200, m: "auto" }}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <List
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Выберите объекты
              </ListSubheader>
            }
          >
            {objects.map((value) => {
              return (
                <ListItem key={value.name}>
                  <ListItemButton onClick={handleToggle(value.name)}>
                    <ListItemIcon>
                      <Checkbox checked={checked.indexOf(value.name) !== -1} />
                    </ListItemIcon>
                    <ListItemText primary={value.name} />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Grid>
        <Grid item xs={6} sx={{ marginTop: 7 }}>
          <Grid container spacing={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid item xs={6}>
                <DatePicker
                  disabled={filtred}
                  label="Дата начала"
                  value={start}
                  onChange={(newValue) => setStart(newValue)}
                />
              </Grid>
              <Grid item xs={6}>
                <DatePicker
                  disabled={filtred}
                  label="Дата окончания"
                  value={end}
                  onChange={(newValue) => setEnd(newValue)}
                />
              </Grid>
            </LocalizationProvider>

            <Grid item xs={6}>
              {" "}
              <Button variant="contained" sx={{height:55, width:275}}  disabled={filtred} onClick={handleFilter}>
                Отфильтровать по дате
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                color="warning"
                sx={{height:56, width:276}}
                onClick={handleReset}
              >
                Сбросить фильтр
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ marginTop: 7, padding:2 }}>
          <Legend />
        </Grid>
        {objects.map((object, index) =>
          checked.includes(object.name) ? (
            <Grid item xs={12}>
              <Object key={index} object={object} />
            </Grid>
          ) : (
            ""
          )
        )}
      </Grid>
    </Box>
  )
}

export default App
