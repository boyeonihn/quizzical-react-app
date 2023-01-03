import React from "react"

export default function(props) {

    return (
        <section className="start--page">
            <h1>Quizzical</h1>
            <p>Test your knowledge on Mythology!</p>
            <button onClick={props.startQuiz}>Start quiz</button>
        </section>
    )
}