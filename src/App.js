 import Legend from "./components/Legend"

import "./App.css"
import Object from "./components/Object"
import objects from "./objects"





function App() {

  return (
    <>

       <Legend/>


        {objects.map((object, index) => <Object key={index} object={object} />)}  

    </>
    
    
  )
}

export default App
