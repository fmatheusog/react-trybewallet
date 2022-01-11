export const LOGIN = 'LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';

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
