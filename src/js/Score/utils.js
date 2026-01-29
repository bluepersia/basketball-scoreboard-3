
function incrementScore (state, by)
{
    if(state.isFrozen)
    {
        return state;
    }
    return {
        ...state,
        score: state.score + by
    }
}

function freeze (state)
{
    return {...state, isFrozen: true}
}

function resetState ()
{
    return {
        score: 0,
        isFrozen: false
    }
}

export { incrementScore, freeze, resetState };