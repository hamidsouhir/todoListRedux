import { ADDTASK, EDITTASK } from "./typeAction"



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
    
}

const reducer =(state=init,{type,payload})=>{
    switch (type) {
        case ADDTASK:
            return{
                ...state,TASK:[...state.TASK,payload]
            }
    case EDITTASK:
        return{
        
        }
        default:
           return state
    }
}

export default reducer