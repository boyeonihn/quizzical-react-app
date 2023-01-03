import React from "react"
import Question from "./Question"; 

export default function Quiz(props){
    const [resultMode, setResultMode] = React.useState(false); 
    const [questionsData, setQuestionsData] = React.useState([]);

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=20&type=multiple")
            .then(res => res.json())
            .then(data => setQuestionsData(data.results))
    }, [])

    function showResult() {
        setResultMode(oldValue => !oldValue); 
        console.log(resultMode)
        return resultMode; 
    }

    // combine the answer choices in one array 
    const answerChoicesArray = questionsData.map( question => [...question.incorrect_answers, question.correct_answer]);
    
    // modified questions so that special characters are rendered correctly
    const questionsArray = questionsData.map( question => {
        const targetQuestion = question.question
        if (targetQuestion.includes(`&#039;`)) {
            return targetQuestion.replaceAll(`&#039;`, `'`)
        }
        else if (targetQuestion.includes(`&quot;`)) {
            return targetQuestion.replaceAll(`&quot;`, `"`)
        }
        else if (targetQuestion.includes(`&amp;`)) {
            return targetQuestion.replaceAll(`&amp;`, `&`)
        }
        else { 
            return targetQuestion
        }
    })
    // map over the questions to create Question component
    const questions = questionsData.map( (question, index) => <Question question={questionsArray[index]} allChoices={answerChoicesArray[index]} answer={question.correct_answer} key={index} />)
    
    return (
        <section className="quiz--content">
            {questions}
            <button onClick={showResult}>{resultMode ? 'Play Again' : 'Check Answers'}</button>
        </section>
    )
}