import React from "react"
import SwitchTheme from "./SwitchTheme"
import DeleteAll from "./DeleteAll"
import CountAdded from "./CountAdded"

function Settings(props) {
  return (
    <div className="settings">
      <CountAdded
        list={props.list}
        setList={props.setList}
      />
      <DeleteAll
        list={props.list}
        setList={props.setList}
      />
      <SwitchTheme
        darkTheme={props.darkTheme}
        setDarkTheme={props.setDarkTheme}
      />
    </div>
  )
}

export default Settings
