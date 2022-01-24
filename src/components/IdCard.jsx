import React from "react"

const IdCard = (props) => {
    console.log(props)
    return (

        <div className="card-container">
            <div className="img">
                <img src={props.picture} alt={props.firstName}/>
            </div>
            <div>
                <ul>
                    <li><span className="bold-text">First Name: </span><span>{props.firstName}</span></li> 
                    <li><span className="bold-text">Last Name: </span><span>{props.lastName}</span></li> 
                    <li><span className="bold-text">Gender: </span><span>{props.gender}</span></li> 
                    <li><span className="bold-text">Height: </span><span>{props.height}</span></li> 
                    <li><span className="bold-text">Birth: </span><span>{props.date}</span></li>
                </ul>
            </div>
        </div>
    );

};

export default IdCard


/*
<IdCard
lastName='Doe'
firstName='John'
gender='male'
height={178}
birth={new Date("1992-07-14")}
picture="https://randomuser.me/api/portraits/men/44.jpg"/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"/>
*/