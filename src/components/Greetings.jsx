import React from "react"

const Greetings = (props)=>{

    const dico = {
        de:"en Allemand",
        en:"en Anglais",
        es:"en Espagnol",
        fr:"en Français"
    }

    return (
        <div>
            <h2>Itération 2 ---------------------------</h2>
            <span className="card-container">{props.children}</span><span>{dico[props.lang]}</span>
        </div>
    );


};

export default Greetings