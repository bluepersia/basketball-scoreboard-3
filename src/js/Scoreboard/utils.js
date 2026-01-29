import {MAX_TIME} from "./constants.js"

function tickTimer (state)
{
   let newTime = state.time - 1;
   if(newTime <= 0)
   {
      newTime = 0;
   }

   return {...state, time: newTime}
}

function resetState ()
{
   return {
      time: MAX_TIME
   }
}

export { tickTimer, resetState
 }