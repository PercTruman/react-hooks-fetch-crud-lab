import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList]= useState([])

  useEffect(()=>{
    fetch(`http://localhost:4000/questions`)
      .then(res=>res.json())
      .then(questionList=>setQuestionList(questionList))
  },[]);

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm questionList={questionList} setQuestionList={setQuestionList}/> 
      : <QuestionList questionList={questionList} setQuestionList={setQuestionList}/>}
    </main>
  );
}

export default App;
