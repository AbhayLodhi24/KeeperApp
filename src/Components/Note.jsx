import React from 'react'

const Note = ({note ,title , content , handleDelete}) => {
  return (
   <div className='note'>
    <h1> {title} </h1>
    <p> {content}</p>
    <button onClick={()=>handleDelete(note)}>DELETE</button>
   </div>
  )
}

export default Note