import React from "react";

export default function Question(props){
    return (
        <div>
            <h2>{props.question}</h2>
            <div className="question-choicesBox">
                <p className="question--choice">{props.answer}</p>
                <p className="question--choice">{props.otherChoices[0]}</p>
                <p className="question--choice">{props.otherChoices[1]}</p>
                <p className="question--choice">{props.otherChoices[2]}</p>
            </div>
        </div>
    )
}