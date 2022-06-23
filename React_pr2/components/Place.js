import React from "react"

export default function Place(props){
    return(
        <div className="mainThing">
        <div>
            <img className="image" src={props.item.imageUrl}/>
            </div>
           <div className="context"> 
           <div className="firstName">
           <h3>{props.item.location}</h3>
           <a id="link" href={props.item.googleMapsUrl}>Check on maps!</a>
           </div>
            <h1 className="writing">{props.item.title}</h1>
            <h3 className="writing">{props.item.startDate} - {props.item.endDate}</h3>
            <p className="writing">{props.item.description}</p>
            </div>
        </div>
    )
}

