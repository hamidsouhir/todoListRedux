import React from 'react'
import { useDispatch } from 'react-redux'
import { com, del } from '../redux/action'
import EditTask from './EditTask'

const Task = ({el}) => {
  const dispatch=useDispatch()
  return (
    <div>
     <h1 className={el.completed?"done":""}>{el.description}</h1>
     <button onClick={()=>dispatch(com(el.id))}>complete</button>
     <button onClick={() =>dispatch(del(el.id))}>delete</button>
     <EditTask el = {el}/>
    </div>
  )
}

export default Task