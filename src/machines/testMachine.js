import { createMachine, assign } from "xstate";

const testMachine = createMachine({
  predictableActionArguments: true,

  id: "test_machine",
  initial: "start",
  context: {
    userAnswers: [],
  },
  states: {
    start: {
      on: {
        START: "question_one",
      },
    },
    question_one: {
      on: {
        CONTINUE: {
          target: "question_two",
          actions: assign((context, event) =>
            context.userAnswers.push(event.newAnswer)
          ),
        },
        EXIT: "start",
      },
    },
    question_two: {
      on: {
        CONTINUE: {
          target: "question_three",
          actions: assign((context, event) =>
            context.userAnswers.push(event.newAnswer)
          ),
        },
        EXIT: "start",
      },
    },
    question_three: {
      on: {
        FINISH: {
          target: "results",
          actions: assign((context, event) =>
            context.userAnswers.push(event.newAnswer)
          ),
        },
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
