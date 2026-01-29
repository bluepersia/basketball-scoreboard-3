import { freeze, incrementScore, resetState } from "./utils.js";

export default function Score (el)
{
    //--FIELDS--//
    let state = resetState()
    
    const scoreEl = el.querySelector('[data-score]');
    const addOneBtn = el.querySelector('[data-add-one]')
    const addTwoBtn = el.querySelector('[data-add-two]')
    const addThreeBtn = el.querySelector('[data-add-three]')

    const scoreRendered = []



    //--CONSTRUCTION--//
    addOneBtn.addEventListener("click", () => handleScoreIncrement(1))
    addTwoBtn.addEventListener("click", () => handleScoreIncrement(2))
    addThreeBtn.addEventListener("click", () => handleScoreIncrement(3))


    //--FUNCTIONS--//
    function handleScoreIncrement (by)
    {
        state = incrementScore (state, by)
        renderScore ();
    }

    function reset ()
    {
        state = resetState()
        renderScore()
    }

    function freezeThis ()
    {
        state = freeze(state)
    }


    function getScore ()
    {
        return state.score
    }


    function renderScore ()
    {
        scoreEl.textContent = state.score
        scoreRendered.forEach(el => el())
    }

  


   return {
    el,
    reset,
    freeze: freezeThis,
    getScore,
    scoreRendered
   }
    
}