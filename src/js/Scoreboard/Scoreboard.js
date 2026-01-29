import Score from "../Score/Score.js";
import { tickTimer, resetState } from './utils.js';

export default function Scoreboard (el)
{
    let state = resetState()
    //--FIELDS--//
    const homeCounter = Score (document.getElementById('home'))
    const guestCounter = Score (document.getElementById('guest'))
    const timerEl = el.querySelector('[data-timer]')
    const newGameBtn = document.getElementById('new-game-btn')
    let timerTimeEl
    let timerInterval

    //--CONSTRUCTION--//
    newGameBtn.addEventListener('click', newGame)
    newGame()
    homeCounter.scoreRendered.push(scoreRendered)
    guestCounter.scoreRendered.push(scoreRendered)
    
    //--FUNCTIONS--//
    function newGame ()
    {
        clearInterval(timerInterval)
        timerEl.innerHTML = `Time left:<span class="scoreboard__timer-time" data-timer-time>${state.time} seconds</span>`
        timerTimeEl = timerEl.querySelector('[data-timer-time]')
        timerInterval = setInterval (timerCallback, 1000)
        homeCounter.reset()
        guestCounter.reset()
        state = resetState()
        renderTimer()
    }


    function timerCallback ()
    {
        state = tickTimer(state)

        if(state.time <= 0)
        {
            homeCounter.freeze()
            guestCounter.freeze()
        }

        renderTimer ()
    }

    function scoreRendered ()
    {
        homeCounter.el.classList.remove('score--highlight')
        guestCounter.el.classList.remove('score--highlight')
        
        if(homeCounter.getScore () > guestCounter.getScore ())
        {
            homeCounter.el.classList.add('score--highlight')
        }
        else if (guestCounter.getScore() > homeCounter.getScore())
        {
            guestCounter.el.classList.add('score--highlight')
        }
    }



    function renderTimer ()
    {
        if(state.time <= 0)
        {
            let winner = 'Draw'

            if(homeCounter.getScore () > guestCounter.getScore ())
            {
                winner = 'Home won!'
            }
            else if (guestCounter.getScore() > homeCounter.getScore())
            {
                winner = "Guest won!"
            }

            timerEl.innerHTML = winner;
            return;
        }
        timerTimeEl.textContent = `${state.time} seconds`
    }
}