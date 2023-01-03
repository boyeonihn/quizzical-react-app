import React from "react";

export default function AnswerChoice(props) {
    const styles = {
        backgroundColor: props.isSelected ? '#89CFF0' : 'white'
    }

    return (
       <p className="question--choice" style={styles} onClick={props.selectAnswer}>{props.value}</p>
    )
}
