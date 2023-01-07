import React from "react";
import AnswerChoice from './AnswerChoice'; 
import {nanoid} from "nanoid";

export default function Question(props){
    const [answerChoices, setAnswerChoices] = React.useState(shuffledChoices()); 

    React.useEffect(() => {
        setAnswerChoices(shuffledChoices())
    }, [props.answerChoices])

    function shuffle(array) {
        console.log('shuffled')
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array; 
    }

    console.log(answerChoices, props.allChoices, props.question, )
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

    function selectAnswer(id){
        setAnswerChoices( oldAnswerChoices => oldAnswerChoices.map(
            answerChoice => {
                 return answerChoice.id === id ? 
                 {...answerChoice, isSelected: !answerChoice.isSelected}
                 : {...answerChoice, isSelected: false}
            }
        ))
    }

    const answerElements = answerChoices.map( answer => (
        <AnswerChoice 
            key={answer.id} 
            value={answer.choice} 
            isSelected={answer.isSelected}
            isAnswer={answer.isAnswer} 
            selectAnswer={() => selectAnswer(answer.id)}
            resultMode={props.resultMode} />
    ))

    return (
        <div>
            <h2>{props.question}</h2>
            <div className="choices--box">
            {answerElements}
            </div>
        </div>
    )
}