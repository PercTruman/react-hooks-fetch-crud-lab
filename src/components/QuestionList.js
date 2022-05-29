import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ setQuestionList, questionList}) {
  
  function handleDeleteQuestion(id){
      fetch(`http://localhost:4000/questions/${id}`, {
        method:'DELETE',
      })
      .then(res=>res.json())
      .then(()=> {
        const updatedQuestions= questionList.filter((question) => question.id !== id)
        setQuestionList(updatedQuestions)
      })
    }
  const questions =(questionList.map(question=>
   <QuestionItem key={question.id} question={question} handleDeleteQuestion={handleDeleteQuestion}/>))
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions}</ul>
    </section>
  );
}

export default QuestionList;
