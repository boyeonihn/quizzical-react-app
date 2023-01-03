import React from "react";

export default function Question(props){
    // let [answerChoices, setAnswerChoices] = React.useState(selectAnswer());

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array; 
    }

    const shuffledChoices = shuffle(props.allChoices);

    return (
        <div>
            <h2>{props.question}</h2>
            <div className="question-choicesBox">
                <p className="question--choice" onClick={(event) => props.chooseOption(event)}>{shuffledChoices[0]}</p>
                <p className="question--choice" onClick={(event) => props.chooseOption(event)}>{shuffledChoices[1]}</p>
                <p className="question--choice" onClick={(event) => props.chooseOption(event)}>{shuffledChoices[2]}</p>
                <p className="question--choice" onClick={(event) => props.chooseOption(event)}>{shuffledChoices[3]}</p>
            </div>
        </div>
    )
}