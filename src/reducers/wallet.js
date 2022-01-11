import { ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, { id: action.id, ...action.expense }],
    };
  default:
    return state;
  }
};

export default wallet;
