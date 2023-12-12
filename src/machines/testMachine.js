import { createMachine, assign } from "xstate";
import { fetchQuestions } from "../utils/api";

const fillQuestions = {
  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: "getQuestions",
        src: () => fetchQuestions,
        onDone: {
          target: "success",
          actions: assign({
            questions: (context, event) => event.data,
          }),
        },
        onError: {
          target: "failure",
          actions: assign({
            error: "Failure while fetching request",
          }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
};

const createQuestionsMachine = () => {
  const initialStates = {
    start: {
      entry: assign((context) => {
        context.userAnswers = [];
      }),

      on: {
        // START: "question_one",
        START: "results",
      },
      ...fillQuestions,
    },
  };

  // Accede a las preguntas directamente desde el contexto
  // const questionsContext = (context) => context.questions || [];
  const questionsContext = (context) => context;

  console.log("questionsContext", questionsContext());

  // questionsContext().forEach((question, index) => {
  //   initialStates[`question_${index + 1}`] = createQuestionState(question);
  // });

  // initialStates.nextQuestion = {
  //   on: {
  //     CONTINUE: {
  //       target: (context, event) => `question_${event.nextQuestionNumber}`,
  //     },
  //     FINISH: "results",
  //   },
  // };

  initialStates.results = {
    on: {
      RETRY: "start",
    },
  };

  return createMachine({
    predictableActionArguments: true,

    id: "test_machine",
    initial: "start",
    context: {
      userAnswers: [],
      questions: [],
      error: "",
    },
    states: initialStates,
  });
};

const testMachine = createQuestionsMachine();

export { testMachine };
