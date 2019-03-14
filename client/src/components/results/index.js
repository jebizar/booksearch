import React from "react";

function Results(props) {
    return(
        <li>
            <img src = {props.image} alt = {props.title}/>
            <p> {props.title} </p>
            <p> {props.author} </p>
            <p> {props.date}</p>
            <a href = {props.link}>{props.link}</a>
            <button onClick = {props.save}> Save book</button>
        </li>
    )
}

export default Results;