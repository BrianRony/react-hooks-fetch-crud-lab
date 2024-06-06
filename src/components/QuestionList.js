import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ onDelete, questions }) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
        questions.map((question) => {
          return (
            <QuestionItem key = {questions.id} question={question} onDelete={onDelete} />
          );
        })
        }</ul>
    </section>
  );
}

export default QuestionList;
