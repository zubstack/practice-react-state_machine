import { createMachine } from "xstate";

const testMachine = createMachine({
  id: "test_machine",
  initial: "start",
  context: {
    retries: 0,
  },
  states: {
    start: {
      on: {
        START: "question_one",
      },
    },
    question_one: {
      on: {
        CONTINUE: "question_two",
        EXIT: "start",
      },
    },
    question_two: {
      on: {
        CONTINUE: "question_three",
        EXIT: "start",
      },
    },
    question_three: {
      on: {
        FINISH: "results",
        EXIT: "start",
      },
    },
    results: {
      on: {
        RETRY: "start",
      },
    },
  },
});

export { testMachine };
