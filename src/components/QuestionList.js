import React from "react";

function QuestionList({questionList}) {
  const questions =(questionList.map(question=>
  <li>{question.prompt}</li>))
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions}</ul>
    </section>
  );
}

export default QuestionList;
