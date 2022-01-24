import React from "react"

const Rating = (props)=>{
    const myNumber = Math.round(props.children)
    console.log(myNumber)
    const tablColor = ["white", "white","white","white","white"]
    
    for(let k=0; k< myNumber; k++){
        tablColor[k]="black"
    }
    console.log(tablColor)
    
    return (
        
        <div>
            <h2>Iteration 6 ----------------</h2>
            {for (let i = 0; k < 5;){
                
            }}
        </div>

    )

}

export default Rating

