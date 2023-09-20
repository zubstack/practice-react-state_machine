/* eslint-disable react/prop-types */
import Question from "../components/Question";
import Results from "../components/Results";
import Welcome from "../components/Welcome";

const questions = ["Q1", "Q2", "Q3"];

function StepsLayout({ state, send }) {
  console.log(state.value);
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
    if (state.matches("results")) return <Results state={state} send={send} />;
  };
  return <>{render()}</>;
}

export default StepsLayout;
