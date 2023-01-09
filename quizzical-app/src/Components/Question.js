import React from "react";
import AnswerChoice from './AnswerChoice'; 

export default function Question(props){
    const [userChoice, setUserChoice] = React.useState(); 
    console.log(userChoice, props.correctAnswer); 

    const correctAnswer = props.correctAnswer
    const answerElements = props.answerChoicesObject.map( answer => (
        <AnswerChoice 
            key={answer.choice} 
            value={answer.choice} 
            correctAnswer={correctAnswer}
            isSelected={answer.isSelected}
            userChoice={userChoice}
            selectAnswer={() => selectAnswer(answer.choice)}
            resultMode={props.resultMode} />
    ))

    function selectAnswer(choice){
        setUserChoice(choice)
    }
    
    return (
        <div>
            <h2>{props.targetQuestion}</h2>
            <div className="choices--box">
                {answerElements}
            </div>
        </div>
    )
}