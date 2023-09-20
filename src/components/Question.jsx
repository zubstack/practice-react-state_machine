/* eslint-disable react/prop-types */
import Nav from "./Nav";
import "./Question.css";

function Question({ send, number, questions }) {
  const lastQuestion = number === questions.length;
  const action = lastQuestion ? "FINISH" : "CONTINUE";
  console.log("questions[number]", questions[number]);
  const questionIndex = number - 1;
  return (
    <>
      <h3>Question #{questions[questionIndex].number}</h3>
      <div className="question__container">
        <h4>{questions[questionIndex].question}</h4>
        {questions[questionIndex].options.map((option, index) => (
          <div key={index}>
            <input type="radio" id="index" name="drone" value="index" />
            <label htmlFor="index">{option}</label>
          </div>
        ))}
      </div>

      <Nav send={send} action={action} />
    </>
  );
}

export default Question;
