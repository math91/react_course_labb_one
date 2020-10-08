import React from "react"

function InputName(props) {

  // Handle input changes
  function handleChange(event) {
    props.setName(event.target.value)
  }

  // Click on add
  function handleClick() {

    // Add to list
    if (props.name === "") {
      alert("Need to write something!")
    } else if (props.list.includes(props.name) === true ) {
      alert("Input exist!")
    } else {
      props.setList(prevList =>
        [
          ...prevList,
          props.name
        ]
      )
      props.setName("")
    }

    // Focus input field
    props.inputField.current.focus()

  }

  return (
    <>
      <input
        type="name"
        name="name"
        ref={props.inputField}
        value={props.name}
        onChange={handleChange}
      />
      <button
        onClick={handleClick}>
        Add Quote
      </button>
    </>
  )
}

export default InputName
