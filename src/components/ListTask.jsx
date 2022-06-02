import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = () => {
    const {TASK}= useSelector (state => state) 
  return (
    <div>
  {
      TASK.map(el => 
         <Task  key={el.id} el ={el} /> )
  }
    </div>
  )
}

export default ListTask