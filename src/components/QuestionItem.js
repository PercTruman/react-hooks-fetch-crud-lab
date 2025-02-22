import React from "react";

function QuestionItem({ question, handleDeleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
    ));

    function handleCorrectAnswerChange(e){
      fetch(`http://localhost:4000/questions/${id}`,{
        method:'PATCH',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({"correctIndex": e.target.value}),
    })
    }

  function handleDeleteClick(){
    handleDeleteQuestion(id)
  }


  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleCorrectAnswerChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
