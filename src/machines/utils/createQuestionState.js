import { assign } from "xstate";

const createQuestionState = (question) => ({
  on: {
    CONTINUE: {
      target: "nextQuestion",
      actions: assign((context, event) => {
        // Aquí maneja la respuesta del usuario según la pregunta
        context.userAnswers.push({ question, answer: event.newAnswer });
      }),
    },
    EXIT: "start",
  },
});

export { createQuestionState };
