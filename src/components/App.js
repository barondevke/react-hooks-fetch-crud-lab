import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";
import { useEffect } from "react";
import QuestionItem from './QuestionItem'


function App() {
  const [page, setPage] = useState("List");
  const [data, setData] = useState([])
  const [questions, setQuestions] = useState([])
  let questionArray = []
  function updatePage() {
    fetch('http://localhost:4000/questions')
      .then(res => res.json())
      .then(json => {
        setData(json)
      })



    data.forEach(x => {
      questionArray.push(<QuestionItem question={x} />)

    })
    setQuestions(questionArray)
    setPage('List')
  }
  console.log(questions)


  return (
    <main>
      <AdminNavBar update={updatePage} onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList array={questions} />}
    </main>
  );
}

export default App;
