import { process_params } from "express/lib/router"
import React from "react"

const CreditCard = (props)=>{

    const images = {
        "Visa" : "/assets/images/visa.png",
        "Master Card" : "/assets/images//master-card.svg"

    }

    console.log(images[props.type])
    console.log()

    return (
        <div>   
            <h2> ITERATION 6 ----------------------------</h2>

                <div style={{
                    color:props.color,
                    backgroundColor:props.bgColor,
                    borderRadius:"10px",
                    width:"300px",
                    height:"175px",
                    display:"flex",
                    flexDirection:'column',
                    justifyContent:"space-around",
                    alignItems:"flex-start",
                    padding:"10px",
                    margin:"10px"
                    
                    
                }}>
                    <div 
                    > <img
                    style = {{
                        
                        alignSelf:"end",
                        justifySelf:"end",
                        margin:"5px",
                        width:"40px",
                        
                    }} 
                    src = {images[props.type]}/>
                    </div>

                    <div> XXXX XXXX XXXX {props.number.slice(-4)}</div>
                    <div style = {{
                            display:"flex",
                            flexDirection:'row',
                            justifyContent:"space-around"
                            
                    }}
                    > 
                    <span>Expires in {props.expirationMonth}/{props.expirationYear}     {props.bank}      </span>

                    </div>
                    <div>
                        <span>
                            {props.owner}
                        </span>
                    </div>
                </div>

        </div>
    )

}

export default CreditCard