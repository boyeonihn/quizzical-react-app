import React from "react";
import AnswerChoice from './AnswerChoice'; 
import {nanoid} from "nanoid";

export default function Question(props){
    const [answerChoices, setAnswerChoices] = React.useState(shuffledChoices); 

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array; 
    }

    function shuffledChoices() {
        const shuffledArray = shuffle(props.allChoices);
        let choicesArray = [];

        for (let i = 0; i < shuffledArray.length; i++) {
            choicesArray.push({
                choice: shuffledArray[i],
                id: nanoid(),
                isSelected: false,
                isAnswer: shuffledArray[i] === props.answer ? true : false 
            })
        }
        return choicesArray; 
    }

    const answerElements = answerChoices.map( answer => (
        <AnswerChoice key={answer.id} value={answer.choice} isSelected={answer.isSelected} id={answer.id} isAnswer={answer.isAnswer} />
    ))
    return (
        <div>
            <h2>{props.question}</h2>
            {answerElements}
        </div>
    )
}