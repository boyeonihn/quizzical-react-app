import React from "react";

export default function AnswerChoice(props) {
    let backgroundColor = ''; 

    console.log(props)
    const isAnswerCorrect = props.userChoice == props.correctAnswer 
    const isSelected = props.userChoice == props.value; 
    const correctAnswer = props.value == props.correctAnswer; 
    
    if (!props.resultMode && isSelected) {
        backgroundColor = '#D6DBF5'
    }
    else if (props.resultMode) {
        if (correctAnswer) {
            backgroundColor ='#94D7A2'
        }
        else if (isSelected && !isAnswerCorrect){
            backgroundColor = '#F8BCBC'
        }
    }

    else {
        backgroundColor = ''; 
    }

    return (
       <p className="question--choice" style={{backgroundColor: backgroundColor}} onClick={props.selectAnswer}>{props.value}</p>
    )
}
