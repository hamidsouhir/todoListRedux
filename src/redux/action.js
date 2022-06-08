import EditTask from "../components/EditTask"
import { ADDTASK, COMPLETE, DELETE, EDITTASK, FILTRED } from "./typeAction"



export const add =(newTask)=>{
    return {
    type: ADDTASK,
    payload:newTask
}
}
export const editTask=(tasktodo)=>{
    return{
        type:EDITTASK,
        payload:tasktodo
    }
}

export const del =(id)=>{
    return {
        type :DELETE,
        payload:id
    }
}

export const com = (id) =>{
    return {
        type :COMPLETE,
        payload: id
    }
}
export const filt =()=>{
    return{
    type: FILTRED
    }
}