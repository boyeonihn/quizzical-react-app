import React from "react";

export default function AnswerChoice(props) {
    const styles = {
        backgroundColor: props.isSelected ? 'blue' : 'white'
    }

    return (
       <p className="question--choice">{props.value}</p>
    )
}
