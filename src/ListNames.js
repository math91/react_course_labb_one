import React from "react"

function ListNames(props) {

  // Remove added
  function handleClick(value) {
    props.setList(props.list.filter(item => item !== value))
  }

  // Show added
  const listItems = props.list.map((item) =>
    <li key={item}>
      <p>{item}</p>
      <button onClick={() => handleClick(item)}>
        Delete
      </button>
    </li>
  )

  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default ListNames
