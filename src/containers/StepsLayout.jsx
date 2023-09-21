/* eslint-disable react/prop-types */
import Question from "../components/Question";
import Results from "../components/Results";
import Welcome from "../components/Welcome";

const questions = [
  {
    number: 1,
    question: "What is the purpose of the Javascript 'localstorage' object?",
    options: [
      "To fetch data from a remote server.",
      "To store data on the client-side browser.",
      "To control the page's layout and styling.",
    ],
    answerIndex: 1,
  },
  {
    number: 2,
    question: "What is the purpose of the 'fetch' API in JavaScript?",
    options: [
      "To fetch data from a local file",
      "To fetch data from a remote server using HTTP requests",
      "To fetch data from the browser's cache",
    ],
    answerIndex: 1,
  },
  {
    number: 3,
    question: "What is 'callback hell' in JavaScript?",
    options: [
      "A popular design pattern for organizing callbacks",
      "A term used to describe functions without callback functions",
      "A situation where nested callbacks become difficult to manage due to excessive indentation",
    ],
    answerIndex: 2,
  },
];

// const check = userAnswers.map(
//   (answer, index) => answer === correctAnswers[index]
// );
const correctAnswers = questions.map((question) => question.answerIndex);

function StepsLayout({ state, send }) {
  console.log("state.context", state.context);
  const render = () => {
    if (state.matches("start")) return <Welcome state={state} send={send} />;
    if (state.matches("question_one"))
      return (
        <Question questions={questions} number={1} state={state} send={send} />
      );
    if (state.matches("question_two"))
      return (
        <Question questions={questions} number={2} state={state} send={send} />
      );
    if (state.matches("question_three"))
      return (
        <Question questions={questions} number={3} state={state} send={send} />
      );
    if (state.matches("results"))
      return (
        <Results state={state} send={send} correctAnswers={correctAnswers} />
      );
  };
  return <>{render()}</>;
}

export default StepsLayout;
