import React from "react"
import Question from "./Question"; 

export default function Quiz(){
    const [questionsData, setQuestionsData] = React.useState([]);

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=20&type=multiple")
            .then(res => res.json())
            .then(data => setQuestionsData(data.results))
    }, [])
    
    // combine the answer choices in one array 
    const answerChoicesArray = questionsData.map( question => [...question.incorrect_answers, question.correct_answer]);
    // map over the questions to create Question component
    const questions = questionsData.map( (question, index) => <Question question={question.question} allChoices={answerChoicesArray[index]} answer={question.correct_answer}/>)
    
    return (
        <section className="quiz--content">
            {questions}
            <button>Check Answers</button>
        </section>
    )
}