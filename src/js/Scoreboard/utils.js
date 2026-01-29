
function tickTimer (state)
{
   let newTime = state.time - 1;
   if(newTime <= 0)
   {
   newTime = 0;
   }

   return {...state, time: newTime}
}