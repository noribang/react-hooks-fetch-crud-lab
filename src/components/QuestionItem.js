import React from "react";

/* PASS IN OBJECT AS PROPS QUESTION */
function QuestionItem({ question, onDeleteQuestion, onUpdatedCorrectIndex }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  /* 3. DELETE/ QUESTIONS/:ID */
  /* EVENT
     FETCH 
     UPDATE STATE*/
  function handleDeleteClick() {
    // console.log("question.id: ", id)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
      .then((r) => r.json())
      // .then(() => console.log("deleted"))
      .then(() => onDeleteQuestion(id))
    // onDeleteQuestion(id)
  }

  /* 4. UPDATE CORRECTINDEX.
        EVENT.
        FETCH.
        UPDATE STATE. */
  function handleUpdateCorrectAnswer(event) {
    // console.log("event.target.value: ", event.target.value)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        correctIndex: event.target.value,
      }),
    })
      .then((r) => r.json())
      // .then((updatedCorrectIndex) => console.log(updatedCorrectIndex) )
      /* UPDATE CORRECTINDEX CALLBACK */
      .then((updatedCorrectIndex) => onUpdatedCorrectIndex(updatedCorrectIndex))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        {/* UPDATE CORRECTINDEX. E.G. EVENT LISTENER={EVENT HANDLER} */}
        <select 
        defaultValue={correctIndex}
        onChange={handleUpdateCorrectAnswer}
        >
          {options}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
