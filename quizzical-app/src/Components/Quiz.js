import React from "react"
import Question from "./Question"; 

export default function Quiz(){
    // API link is https://opentdb.com/api.php?amount=10&category=20&type=multiple
    // get questions from the Quiz API via fetch request
    // the JSON results data.results 
    // question is stored in data.results[INDEX].question
    // correct answer is stored in data.results[INDEX].correct_answer and incorrect answer is stored in data.results[INDEX].incorrect_answer 

    // somehow figure out how to mix the order of the answer choices; 
    
    return (
        <section>
            <Question />
            <button>Check Answers</button>
        </section>
    )
}