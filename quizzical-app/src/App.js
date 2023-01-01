import React from "react";
import './App.css';
import Start from './Components/Start';
import Quiz from './Components/Quiz'; 

function App() {
  const [quizMode, setQuizMode] = React.useState(false); 

  function startQuiz(){
    console.log(`what is up!`); 
    setQuizMode(true); 
    console.log(quizMode)
  }
  return (
    <div>
      {!quizMode &&<Start startQuiz={startQuiz}/>}
      {quizMode && <Quiz />}
    </div>
  );
}

export default App;
