import React, { useState } from 'react';
import './App.css';
import questions from './Question';

function App() {

  const [ques,setques] = useState(0);
  const [score,setscore] = useState(0);
  const [showscore,setshowscore] = useState(false);
  const correctQues = questions[ques];
  
  
  const nextQes= (i)=>{
    if(i == correctQues.answer){
    
      setscore(score+1)}
  const nextQuiz = ques +1
    if (nextQuiz<questions.length) {
       setques(ques+1)
    }
    else{
      setshowscore(true);
    }
         
    
    }

    const restart = () =>{
      setques(0)
      setscore(0)
      setshowscore(false)

    } 
   
   return (
    
    
    <div className="quiz-container">
      {showscore?<>
        <h1>your score:{score}</h1>
        <button onClick={(restart)}>restart</button></>
      :
      <div className='quiz-container_questions'><p >{correctQues.questions}</p>
        <div className='quiz-container_option'>
      <ul className='quiz-container_ul'>
       {correctQues.option.map((opt,i)=>{
        return <li className='quiz-container_li' onClick={()=>nextQes(i)}>{opt}</li>
       })} 
       
      </ul>
      </div>
      
      </div>}
      
    </div>
  )

      };
export default App;
