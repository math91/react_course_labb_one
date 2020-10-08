import React from "react"

function SwitchTheme(props) {

  function handleChange() {
    props.setDarkTheme(prevState => {
      if (props.darkTheme === prevState) {
        return !props.darkTheme
      }
    })
  }

  return (
    <div className="switch-theme">
      <label>Dark mode:</label>
      <input
        type="checkbox"
        checked={props.darkTheme}
        onChange={handleChange}
      />
    </div>
  )
}

export default SwitchTheme
