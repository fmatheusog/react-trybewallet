import fetchAPI from '../services/api';

export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const GET_CURRENCIES = 'GET_CURRENCIES';

let idCounter = 0;

export const loginAction = (email) => (
  {
    type: LOGIN,
    email,
  }
);

export const addExpenseAction = (expense) => {
  const action = {
    type: ADD_EXPENSE,
    expense,
    id: idCounter,
  };
  idCounter += 1;

  return action;
};

export const deleteExpenseAction = (id) => (
  {
    type: DELETE_EXPENSE,
    id,
  }
);

export const getCurrencies = (currencies) => (
  {
    type: GET_CURRENCIES,
    currencies,
  }
);

export const getCurrenciesThunk = () => (dispatch) => {
  fetchAPI()
    .then((response) => dispatch(getCurrencies(response)));
};
