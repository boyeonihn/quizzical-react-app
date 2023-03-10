import React from "react";
import './App.css';
import Start from './Components/Start';
import Question from './Components/Question';

function App() {
  const [quizMode, setQuizMode] = React.useState(false); 
  const [questionsJSONData, setQuestionsJSONData] = React.useState([]);
  const [resultMode, setResultMode] = React.useState(false); 
  const [questionUnits, setQuestionUnits] = React.useState([]);
  const [score, setScore] = React.useState(0); 

  function startQuiz(){
    setQuizMode(true); 
    getNewGame(); 
  }

  function getNewGame(){
    fetch("https://opentdb.com/api.php?amount=5&category=20&type=multiple")
    .then((res) => res.json())
    .then((data) => {
      setQuestionsJSONData(data.results);
      setResultMode(false);
      setScore(0); 
    })
  }

  function turnResultMode() {
    setResultMode(oldValue => !oldValue); 
    return resultMode; 
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array; 
  }
  
  // he library that correctly displays special characters
  const he = require('he'); 
  
  function createQuestionUnit(){
    const questionsDataCleaned = questionsJSONData.map( question => {
      const answersArray = [...question.incorrect_answers, question.correct_answer];
      const shuffledAnswers = shuffle(answersArray); 
      let choicesArray = [];

      for (let i = 0; i < shuffledAnswers.length; i++) {
          choicesArray.push({
              choice: he.decode(shuffledAnswers[i])
          })
      }

      return {
        targetQuestion: he.decode(question.question),
        correctAnswer: he.decode(question.correct_answer),
        allAnswerChoices: choicesArray
      }
    });

    setQuestionUnits(questionsDataCleaned); 
  }

  // Create Question Component Map
  const questionComponents = questionUnits.map( (questionUnit, index) => 
    <Question 
      key={index}
      targetQuestion={questionUnit.targetQuestion} 
      correctAnswer={questionUnit.correctAnswer} 
      allAnswerChoices={questionUnit.allAnswerChoices}
      resultMode={resultMode}
    /> );
  
  React.useEffect(() => {
    createQuestionUnit();
  }, [questionsJSONData])

  return (
    <div className="app--container">
      {!quizMode && <Start startQuiz={startQuiz} />}
      {quizMode ? 
        <section className="quiz--content">
          {questionComponents}
          {/* {resultMode && <p>You scored {score}/5 correct answers</p>} */}
          {resultMode && <button onClick={getNewGame}>Play Again</button>}
          {!resultMode && <button onClick={turnResultMode}>Check Answers</button>}
        </section> : ''
      }
    </div>
  );
}

export default App;
