import React from "react";

export default function AnswerChoice(props) {
    let backgroundColor = ''; 
    if (!props.resultMode && props.isSelected) {
        backgroundColor = '#D6DBF5'
    } 
    else if (props.resultMode && props.isAnswer) {
        backgroundColor = '#94D7A2'; 
    }
    else if (props.resultMode && props.isSelected && !props.isAnswer) {
        backgroundColor = '#F8BCBC'; 
    } 
    else {
        backgroundColor = ''; 
    }


    return (
       <p className="question--choice" style={{backgroundColor: backgroundColor}} onClick={props.selectAnswer}>{props.value}</p>
    )
}
