import React from "react";

export default function AnswerChoice(props) {
    console.log(props.isSelected, props.isAnswer)
    let backgroundColor = ''; 
    if (!props.resultMode && props.isSelected) {
        backgroundColor = '#89CFF0'
    } 
    else if (props.resultMode && props.isSelected && props.isAnswer) {
        backgroundColor = 'green'; 
    }
    else if (props.resultMode && props.isSelected && !props.isAnswer) {
        backgroundColor = 'red'; 
    } else {
        backgroundColor = ''; 
    }


    return (
       <p className="question--choice" style={{backgroundColor: backgroundColor}} onClick={props.selectAnswer}>{props.value}</p>
    )
}
