import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questionList}) {
  const questions =(questionList.map(question=>
   <QuestionItem key={question.id} question={question} />))
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions}</ul>
    </section>
  );
}

export default QuestionList;
