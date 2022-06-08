import { ADDTASK, COMPLETE, DELETE, EDITTASK, FILTRED } from "./typeAction"



const init ={
    TASK:[
        {
            id : Math.random(),
            description : "wake up",
            completed : true
        
        },
        {
            id : Math.random(),
            description : "make a coffee",
            completed : false
        
        },
        {
            id : Math.random(),
            description : "go out",
            completed : false
        
        }
    ],
    isFiltred:false
    
}

const reducer =(state=init,{type,payload})=>{
    switch (type) {
        case ADDTASK:
            return{
                ...state,TASK:[...state.TASK,payload]
            }
    case EDITTASK:
        return{
        ...state,TASK:state.TASK.map(el=>el.id===payload.id?payload:el)
        }
        case DELETE:
            return{
                ...state,TASK:state.TASK.filter(el => el.id!==payload)
            }
            case COMPLETE:
            return {
               ...state,TASK:state.TASK.map(el=>el.id===payload?{...el,completed:!el.completed}:el)
            }
            case FILTRED:
                return{
                    ...state,isFiltred:!state.isFiltred

                }
        default:
           return state
    }
        
}

export default reducer