import React from "react"

function DeleteAll(props) {

  function handleClick() {
    props.setList([])
  }

  return (
    <>
      <button
        onClick={handleClick}
      >
        Deleta all quotes
      </button>
    </>
  )
}


export default DeleteAll
