import { createStore } from 'redux'

type State = {
  index: number,
  colors: string[],
}

type Action =
  | { type: "NEXT_COLOR" }
  | { type: "PREV_COLOR" }

const INITIAL_STATE : State = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};


const reducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case "NEXT_COLOR":
      return {
        ...state,
        index: state.index + 1 < state.colors.length ? state.index + 1 : 0,
      }
    case "PREV_COLOR":
      return {
        ...state,
        index: state.index - 1 >= 0 ? state.index - 1 : state.colors.length - 1,
      }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;