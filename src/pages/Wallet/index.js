import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpenseAction, deleteExpenseAction, getCurrenciesThunk } from '../../actions';
import Header from '../../components/Header';

const Wallet = () => {
  const [valueInput, setValueInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [currencyInput, setCurrencyInput] = useState('');
  const [methodInput, setMethodInput] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [addButtonDisabled, setAddButtonDisabled] = useState(true);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();

  const currencies = useSelector((state) => state.wallet.currencies);
  const expenses = useSelector((state) => state.wallet.expenses);

  const cleanInputs = () => {
    setValueInput('');
    setDescriptionInput('');
    setCurrencyInput('');
    setMethodInput('');
    setTagInput('');
  };

  useEffect(() => {
    setCurrencyInput(Object.keys(currencies)[0]);
  }, [currencies]);

  useEffect(() => {
    dispatch(getCurrenciesThunk());
  }, [dispatch]);

  useEffect(() => {
    const totalReducer = (acc, current) => (
      acc + current.value * current.exchangeRates[current.currency].ask);
    const totalResult = expenses.reduce(totalReducer, 0);
    setTotal(Number(totalResult));
  }, [expenses]);

  useEffect(() => {
    const regex = /^[0-9]*$/;
    if (regex.test(valueInput) === false || valueInput === '') setAddButtonDisabled(true);
    else setAddButtonDisabled(false);
  }, [valueInput]);

  return (
    <>
      <Header total={ total } />
      <div className="wallet-page">
        <div className="expenses-add-form">
          <label htmlFor="value-input">
            Valor da despesa:
            <input
              value={ valueInput }
              type="text"
              data-testid="value-input"
              id="value-input"
              onChange={ (e) => setValueInput(e.target.value) }
            />
          </label>

          <label htmlFor="description-input">
            Descri????o:
            <input
              value={ descriptionInput }
              type="text"
              data-testid="description-input"
              id="description-input"
              onChange={ (e) => setDescriptionInput(e.target.value) }
            />
          </label>

          <label htmlFor="currency-input">
            Moeda:
            <select
              value={ currencyInput }
              data-testid="currency-input"
              id="currency-input"
              onChange={ (e) => setCurrencyInput(e.target.value) }
            >
              { Object.keys(currencies)
                .filter((currency) => currency !== 'USDT').map((currency) => (
                  <option
                    key={ currency }
                    value={ currency }
                    data-testid={ currency }
                  >
                    { currency }
                  </option>
                )) }
            </select>
          </label>

          M??todo de pagamento:
          <select
            value={ methodInput }
            data-testid="method-input"
            id="method-input"
            onChange={ (e) => setMethodInput(e.target.value) }
          >
            <option> </option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cart??o de d??bito">Cart??o de d??bito</option>
            <option value="Cart??o de cr??dito">Cart??o de cr??dito</option>
          </select>

          Categoria:
          <select
            value={ tagInput }
            data-testid="tag-input"
            id="tag-input"
            onChange={ (e) => setTagInput(e.target.value) }
          >
            <option> </option>
            <option value="Alimenta????o">Alimenta????o</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Sa??de">Sa??de</option>
          </select>

          <button
            type="button"
            disabled={ addButtonDisabled }
            onClick={ () => {
              dispatch(getCurrenciesThunk());
              dispatch(addExpenseAction({
                value: valueInput,
                description: descriptionInput,
                currency: currencyInput,
                method: methodInput,
                tag: tagInput,
                exchangeRates: currencies,
              }));
              cleanInputs();
            } }
          >
            Adicionar despesa
          </button>
        </div>
        <table className="expenses-table">
          <thead>
            <tr>
              { ['Descri????o',
                'Tag',
                'M??todo de pagamento',
                'Valor',
                'Moeda',
                'C??mbio utilizado',
                'Valor convertido',
                'Moeda de convers??o',
                'Editar/Excluir'].map((cat) => <th key={ cat }>{ cat }</th>) }
            </tr>
          </thead>
          {
            expenses.map((expense) => (
              <tbody key={ expense.id }>
                <tr>
                  <td>{ expense.description }</td>
                  <td>{ expense.tag }</td>
                  <td>{ expense.method }</td>
                  <td>{ expense.value }</td>
                  <td>{ expense.exchangeRates[expense.currency].name }</td>
                  <td>
                    { Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }
                  </td>
                  <td>
                    {
                      Number(expense.value * expense.exchangeRates[expense.currency].ask)
                        .toFixed(2)
                    }
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      type="button"
                      data-testid="edit-btn"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      id={ expense.id }
                      onClick={ ({
                        target: { id } }) => dispatch(deleteExpenseAction(Number(id))) }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          }
        </table>
      </div>
    </>
  );
};

export default Wallet;
