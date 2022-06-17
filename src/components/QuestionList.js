import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  /* STATE QUESTIONS */
  const [questions, setQuestions] = useState([]);
  /* 1. GET QUESTIONS. */
  /* EVENT. RENDER QUESTIONLIST PAGE */
  /* FETCH. GET REQUEST. */
  /* UPDATE STATE. */
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      /* UPDATE STATE. ARRAY OF OBJECTS. */
      // .then((questions) => console.log("questions: ", questions))  
      .then((questions) => setQuestions(questions))  
  }, []);

  /* UPDATE STATE. DELETE QUESTION. */
  function handleDeleteQuestion(deletedQuestion) {
    // console.log("Deleted question", deletedQuestion);
    /* UPDATE QUESTIONS STATE */
    const updateQuestions = questions.filter((question) => question.id !== deletedQuestion );
    setQuestions(updateQuestions);
  }

  /* UPDATE STATE. CORRECTINDEX */
  function handleUpdatedCorrectIndex(updatedCorrectIndex) {
    console.log("updatedCorrectIndex: ", updatedCorrectIndex);
    const updatedQuestion = questions.map((question) => {
      if (question.id === updatedCorrectIndex.id) {
        return updatedCorrectIndex;
      } else {
        return question;
      }
      /* UPDATE STATE CORRECTINDEX. */
      setQuestions(updatedQuestion);
    });
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */}
        {questions.map((question) => (
        <QuestionItem 
          question={question}
          onDeleteQuestion={handleDeleteQuestion}
          onUpdatedCorrectIndex={handleUpdatedCorrectIndex}
          // key={question.id}
          // prompt={question.prompt}
          // answers={question.answers}
          // correctIndex={correctIndex}
        />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
