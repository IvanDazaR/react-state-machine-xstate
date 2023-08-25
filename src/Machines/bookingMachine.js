import { createMachine } from 'xstate';

const bookingMachine = createMachine({
  id: 'buy plane tickets',
  initial: 'initial',
  context: {
    passengers: [],
    selectedCountry: '',
  },
  states: {
    initial: {
      on: {
        START: 'search'
      }
    },
    search: {
      on: {
        CONTINUE: 'passengers',
        CANCEL: 'initial'
      }
    },
    passengers: {
      on: {
        DONE: 'tickets',
        CANCEL: 'initial'
      }
    },
    tickets: {
      on: {
        FINISH: 'initial',
        CANCEL: 'initial'
      }
    },
  }
})

export default bookingMachine