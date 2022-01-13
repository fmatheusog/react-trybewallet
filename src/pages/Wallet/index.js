import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpenseAction, getCurrenciesThunk } from '../../actions';
import Header from '../../components/Header';
import ExpensesTable from '../../components/ExpensesTable';

const Wallet = () => {
  const [valueInput, setValueInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [currencyInput, setCurrencyInput] = useState('');
  const [methodInput, setMethodInput] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [addButtonDisabled, setAddButtonDisabled] = useState(true);

  const dispatch = useDispatch();

  const currencies = useSelector((state) => state.wallet.currencies);

  useEffect(() => {
    dispatch(getCurrenciesThunk());
  }, [dispatch]);

  useEffect(() => {
    const regex = /^[0-9]*$/;
    if (regex.test(valueInput) === false || valueInput === '') setAddButtonDisabled(true);
    else setAddButtonDisabled(false);
  }, [valueInput]);

  const cleanInputs = () => {
    setValueInput('');
    setDescriptionInput('');
    setCurrencyInput('');
    setMethodInput('');
    setTagInput('');
  };

  return (
    <>
      <Header />
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
            Descrição:
            <input
              value={ descriptionInput }
              type="text"
              data-testid="description-input"
              id="description-input"
              onChange={ (e) => setDescriptionInput(e.target.value) }
            />
          </label>

          Moeda:
          <select
            value={ currencyInput }
            data-testid="currency-input"
            id="currency-input"
            onChange={ (e) => setCurrencyInput(e.target.value) }
          >
            <option> </option>
            { Object.keys(currencies)
              .filter((currencie) => currencie !== 'USDT').map((currencie) => (
                <option
                  key={ currencie }
                  value={ currencie }
                  data-testid={ currencie }
                >
                  { currencie }
                </option>
              )) }
          </select>

          Método de pagamento:
          <select
            value={ methodInput }
            data-testid="method-input"
            id="method-input"
            onChange={ (e) => setMethodInput(e.target.value) }
          >
            <option> </option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </select>

          Categoria:
          <select
            value={ tagInput }
            data-testid="tag-input"
            id="tag-input"
            onChange={ (e) => setTagInput(e.target.value) }
          >
            <option> </option>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>

          <button
            type="button"
            disabled={ addButtonDisabled }
            onClick={ () => {
              dispatch(getCurrenciesThunk());
              dispatch(addExpenseAction({
                value: Number(valueInput),
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
        <ExpensesTable />
      </div>
    </>
  );
};

export default Wallet;
