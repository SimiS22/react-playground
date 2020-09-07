import * as Redux from 'redux';

export interface AppState {
  appName: string;
  counter: number;
}

const initialState = {
  appName: 'My React App',
  counter: 0,
};

const myReducer = (state: AppState = initialState, action: Redux.AnyAction) => {
  switch (action.type) {
    case 'CHANGE_APP_NAME':
      return {
        ...state,
        appName: action.payload,
      };

    case 'COUNTER_INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'COUNTER_DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

export const myStore = Redux.createStore(myReducer, initialState);
