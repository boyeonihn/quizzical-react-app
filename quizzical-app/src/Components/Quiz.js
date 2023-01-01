import React from "react"
import Question from "./Question"; 

export default function Quiz(){
    const [questionsData, setQuestionsData] = React.useState([]);

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=20&type=multiple")
            .then(res => res.json())
            .then(data => setQuestionsData(data.results))
    }, [])
    // correct answer is stored in data.results[INDEX].correct_answer and incorrect answer is stored in data.results[INDEX].incorrect_answer 

    // somehow figure out how to mix the order of the answer choices; 
    
    // first just pull out the QUESTIONS only from the data
    const questions = questionsData.map( question => <Question question={question.question} answer={question.correct_answer} otherChoices={question.incorrect_answers} />)
    return (
        <section>
            <pre>{JSON.stringify(questionsData, null, 2)}</pre>
            {questions}
            <button>Check Answers</button>
        </section>
    )
}