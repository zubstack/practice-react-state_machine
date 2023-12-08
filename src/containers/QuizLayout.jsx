import { useMachine } from "@xstate/react";
import { quizMachine } from "../machines/quizMachine";
import StepsLayout from "./StepsLayout";

function QuizLayout() {
  const [state, send] = useMachine(quizMachine);

  return (
    <>
      <StepsLayout state={state} send={send} />
    </>
  );
}

export default QuizLayout;
