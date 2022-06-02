import EditTask from "../components/EditTask"
import { ADDTASK, EDITTASK } from "./typeAction"



export const add =(newTask)=>{
    return {
    type: ADDTASK,
    payload:newTask
}
}
export const editTask=(id)=>{
    return{
        type:EDITTASK,
        payload:id
    }
}