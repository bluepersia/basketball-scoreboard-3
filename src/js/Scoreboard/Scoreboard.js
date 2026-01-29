import Score from "../Score/Score.js";
import { MAX_TIME } from "./constants.js";

export default function Scoreboard (el)
{
    let state = {
        time: MAX_TIME
    }
    //--FIELDS--//
    const homeCounter = Score (document.getElementById('home'))
    const guestCounter = Score (document.getElementById('guest'))

    //--CONSTRUCTION--//
    setInterval (timerCallback, 1000)
    
    //--FUNCTIONS--//
    function timerCallback ()
    {
        
    }
}