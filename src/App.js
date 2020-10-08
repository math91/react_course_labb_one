import React from "react"
import InputName from "./InputName"
import ListNames from "./ListNames"
import Settings from "./Settings"
import './style.css';

function App() {

  const [name, setName] = React.useState("")
  const [list, setList] = React.useState([])
  const [darkTheme, setDarkTheme] = React.useState(false)
  const inputField = React.useRef(null)

  React.useEffect(() => {
    inputField.current.focus()
  }, [])

  return (
    <div className={darkTheme ? 'dark' : 'light'}>
      <InputName
        name={name}
        setName={setName}
        list={list}
        setList={setList}
        inputField={inputField}
      />
      <ListNames
        list={list}
        setList={setList}
      />
      <Settings
        list={list}
        setList={setList}
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
      />
    </div>
  )
}

export default App
