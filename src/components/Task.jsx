import React from 'react'
import EditTask from './EditTask'

const Task = ({el}) => {
  return (
    <div>
     <h1>{el.description}</h1>
     <button>complete</button>
     <button>delete</button>
     <EditTask/>
    </div>
  )
}

export default Task