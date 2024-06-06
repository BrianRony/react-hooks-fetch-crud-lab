import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);


  // fetch questions from API
  useEffect(() => {
    // fetch
    fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((data) => setQuestions(data));
  }, []);

  function handleDelete(id) {
    const deletedQ = (questions.filter((question) => question.id!== id))
    setQuestions(deletedQ);
  }
  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm  onAddQuestion={handleAddQuestion}/> : <QuestionList onDelete={handleDelete} questions={questions} /> }
    </main>
  );
}

export default App;
