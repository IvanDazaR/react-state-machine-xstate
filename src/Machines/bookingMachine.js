import { createMachine, assign } from "xstate";
import { fetchCountries } from "../Utils/api";

const fillCountries = {
  initial: "loading",
  states: {
    loading: {
      invoke: {
        id: 'getCountries',
        src: () => fetchCountries,
        onDone: {
          target: 'success',
          actions: assign({
            countries: (context, event) => event.data,
          })
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: 'Fallo el request',
          })
        }
      }
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
};

const bookingMachine = createMachine(
  {
    id: "buy plane tickets",
    predictableActionArguments: true,
    initial: "initial",
    context: {
      passengers: [],       
      emails: [],
      selectedCountry: "",
      countries: [],
      error: '',
    },
    states: {
      initial: {
        on: {
          START: {
            target: "search",
          },
        },
      },
      search: {
        on: {
          CONTINUE: {
            target: "passengers",
            actions: assign({
              selectedCountry: (context, event) => event.selectedCountry,
            }),
          },
          CANCEL: "initial",
        },
        ...fillCountries,
      },
      tickets: {
        after: {
          5000: {
            target: 'initial',
            actions: 'cleanContext',
          }
        },
        on: {
          FINISH: {
            target: "initial",
            actions: 'cleanContext',
          } 
        },
      },
      passengers: {
        on: {
          DONE: {
            target: "tickets",
            cond: "moreThanOnePassenger"
          },
          CANCEL: {
            target: "initial",
            actions: "cleanContext",
          },
          ADD: {
            target: "passengers",
            // actions: 'addPassengers'
            actions: assign((context, event) => {
              context.passengers.push(event.newPassenger)
              context.emails.push(event.newEmailPassenger)
            }),
            // actions: assign({
            //   passengers: (context, event) => event.newPassenger,
            //   emails: (context,event) => event.newEmailPassenger
            // }),
          },
        },
      },
    },
  },
  {
    actions: {
      cleanContext: assign((context) => {
        context.passengers = []
        context.emails = []
        context.selectedCountry = ""
        context.countries = []
        context.error = ''
      }),
    },
    guards: {
      moreThanOnePassenger: (context) => {
        return context.passengers.length > 0;
      }
    },
  }
);

export default bookingMachine;