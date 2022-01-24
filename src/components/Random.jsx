import React from 'react'

const Random = (props)=>{

    return (
        <div>
            <h2>Iteration 3 ----------------------------------</h2>
            <span> {props.min + Math.floor(Math.random()*(props.max + 1-props.min))}  </span>
        </div>
    )

}

export default Random