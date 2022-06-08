import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filt } from '../redux/action'
import Task from './Task'

const ListTask = () => {
    const {TASK,isFiltred}= useSelector (state => state)
    const dispatch=useDispatch() 
  return (
    <div>
      <button onClick={()=>dispatch(filt())}>{isFiltred?"all":"filter"}</button>
      {
        !isFiltred?
      
      <div>
  {
      TASK.map(el => 
         <Task  key={el.id} el ={el} /> )
  }
     </div>:
      <div>
      {
          TASK.filter(x=>!x.completed).map(el => 
             <Task  key={el.id} el ={el} /> )
      }
         </div>
     }
    </div>
  )
}

export default ListTask