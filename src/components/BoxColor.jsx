import React from "react"

const BoxColor = (props)=>{

    console.log(<div width="250px" height="250px" background-color={["rgb(",props.r,",",props.g,",",props.b,")"].join("")}></div>)
    const myColor = ["rgb(",props.r,",",props.g,",",props.b,")"].join("")

    console.log(myColor)
    return( 

            <div>
                <h2>Iteration 5 -----------------------------------------</h2>
                    <div style={{
                        width:"250px",
                        height:"250px", 
                        backgroundColor:["rgb(",props.r,",",props.g,",",props.b,")"].join("")
                    }} ></div>
                <h2>END 5 -----------------------------------------</h2>
            </div>
        );
    
}

export default BoxColor