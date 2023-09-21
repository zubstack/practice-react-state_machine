import { useMachine } from "@xstate/react";
import Nav from "../components/Nav";
import { testMachine } from "../machines/testMachine";
import StepsLayout from "./StepsLayout";

function QuizLayout() {
  const [state, send] = useMachine(testMachine);

  return (
    <>
      <StepsLayout state={state} send={send} />
      {/* <Nav /> */}
    </>
  );
}

export default QuizLayout;
