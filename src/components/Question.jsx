/* eslint-disable react/prop-types */
import { useState } from "react";
import Nav from "./Nav";
import "./Question.css";

function Question({ send, number, questions }) {
  const lastQuestion = number === questions.length;
  const action = lastQuestion ? "FINISH" : "CONTINUE";
  const questionIndex = number - 1;
  const [currentValue, setCurrentValue] = useState("*");
  if (!currentValue) {
    console.log("Not answered");
  } else {
    console.log(
      currentValue === questions[questionIndex].answerIndex
        ? "Correct answer"
        : "Incorrect"
    );
  }

  return (
    <>
      <h3>Question #{questions[questionIndex].number}</h3>
      <div className="question__container">
        <h4>{questions[questionIndex].question}</h4>
        {questions[questionIndex].options.map((option, index) => (
          <div key={index}>
            <input
              onChange={(e) => setCurrentValue(parseInt(e.target.id))}
              type="radio"
              id={index}
              name="drone"
            />
            <label htmlFor={index}>{option}</label>
          </div>
        ))}
      </div>

      <Nav send={send} action={action} currentValue={currentValue} />
    </>
  );
}

export default Question;
