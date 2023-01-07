import React from "react";
import './App.css';
import Start from './Components/Start';
import Quiz from './Components/Quiz'; 
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
      console.log('this has been completed')
    })
  }

  React.useEffect(() => {
    const questionsDataCleaned = questionsJSONData.map( question => {
      return {
        targetQuestion: question.question,
        correctAnswer: question.correct_answer,
        incorrectAnswer: question.incorrect_answers,
        allChoices: [...question.incorrect_answers, question.correct_answer]
      }
    });
    setQuestionUnits(questionsDataCleaned)
  }, [questionsJSONData])

  function turnResultMode() {
    setResultMode(oldValue => !oldValue); 
    return resultMode; 
  }

  return (
    <div className="app--container">
      {!quizMode && <Start startQuiz={startQuiz} />}
      {quizMode ? 
        <section className="quiz--content">
          <h1>Mythology Quizzical</h1>
          {resultMode && <p>You scored {score}/5 correct answers</p>}
          {resultMode && <button onClick={getNewGame}>Play Again</button>}
          {!resultMode && <button onClick={turnResultMode}>Check Answers</button>}
        </section> : ''
      }
    </div>
  );
}

export default App;
