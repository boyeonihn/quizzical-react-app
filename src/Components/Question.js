import React from "react";
import AnswerChoice from './AnswerChoice'; 

export default function Question(props){
    const [userChoice, setUserChoice] = React.useState(); 
    const correctAnswer = props.correctAnswer; 
    const answerElements = props.allAnswerChoices.map( answer => (
        <AnswerChoice 
            key={answer.choice} 
            value={answer.choice} 
            correctAnswer={correctAnswer}
            userChoice={userChoice}
            selectAnswer={() => selectAnswer(answer.choice)}
            resultMode={props.resultMode} />
    ))

    function selectAnswer(choice){
        setUserChoice(choice)
    }

    if (props.resultMode && userChoice === correctAnswer) {
        console.log(`correct answer`)
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