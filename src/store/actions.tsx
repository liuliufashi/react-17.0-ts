export function ADD(state:any,action:any) {
   state.message="world";
   return state;
}
export function  GOOD (state:any,action:any){
   return setTimeout(()=>{
           alert("api")
   },100)
}
