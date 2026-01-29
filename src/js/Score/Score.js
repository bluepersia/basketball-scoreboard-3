import { incrementScore } from "./utils.js";

export default function Score (el)
{
    //--FIELDS--//
    let state = {
        score: 0
    }
    
    const scoreEl = el.querySelector('[data-score]');
    const addOneBtn = el.querySelector('[data-add-one]')
    const addTwoBtn = el.querySelector('[data-add-two]')
    const addThreeBtn = el.querySelector('[data-add-three]')



    //--CONSTRUCTION--//
    addOneBtn.addEventListener("click", () => handleScoreIncrement(1));
    addTwoBtn.addEventListener("click", () => handleScoreIncrement(2));
    addThreeBtn.addEventListener("click", () => handleScoreIncrement(3));


    //--FUNCTIONS--//
    function handleScoreIncrement (by)
    {
        state = incrementScore (state, by);
        renderScore ();
    }


    function renderScore ()
    {
        scoreEl.textContent = state.score;
    }
    
}