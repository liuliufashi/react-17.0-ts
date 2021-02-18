import  { ADD,GOOD } from  "./actions"

const data = {
    message:"hello store"
}

function Reducer(state=data,action:any){
     if(action.type==="add"){
         GOOD(state,action)
     }else{
         return state;
     }
    return state;
}
export default Reducer;
