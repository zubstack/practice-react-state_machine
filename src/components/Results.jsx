/* eslint-disable react/prop-types */
import Nav from "./Nav";

function Results({ state, send, correctAnswers }) {
  const { userAnswers } = state.context;
  const check = userAnswers.map((answer, index) => {
    if (answer === "*") {
      return answer;
    }
    return answer === correctAnswers[index];
  });
  console.log("userAnswers", userAnswers);
  let counterTrue = 0;
  let counterFalse = 0;
  let counterNotAnswer = 0;

  for (const value of check) {
    if (value) {
      if (value === "*") {
        counterNotAnswer++;
      } else {
        counterTrue++;
      }
    } else {
      counterFalse++;
    }
  }
  return (
    <>
      <h2>Results:</h2>
      <ul>
        <li>Goods:{counterTrue}</li>
        <li>Bads:{counterFalse}</li>
        <li>Not awsered:{counterNotAnswer}</li>
      </ul>
      <Nav send={send} action={"RETRY"} />
    </>
  );
}

export default Results;
