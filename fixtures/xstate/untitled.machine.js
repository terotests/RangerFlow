import { createMachine } from "xstate";

export const machine = createMachine({
  context: {},
  id: "Untitled",
  initial: "Initial state",
  states: {
    "Initial state": {
      on: {
        next: {
          target: "Another state",
        },
      },
    },
    "Another state": {
      on: {
        next: [
          {
            target: "Parent state",
            guard: {
              type: "some condition",
            },
          },
          {
            target: "Initial state",
          },
        ],
      },
    },
    "Parent state": {
      initial: "Child state",
      on: {
        back: {
          target: "Initial state",
          actions: {
            type: "reset",
          },
        },
      },
      states: {
        "Child state": {
          on: {
            next: {
              target: "Another child state",
            },
          },
        },
        "Another child state": {},
      },
    },
  },
}).withConfig({
  actions: {
    reset: function (context, event) {
      // Add your action code here
      // ...
    },
  },
  guards: {
    "some condition": function (context, event) {
      // Add your guard condition here
      return true;
    },
  },
});
