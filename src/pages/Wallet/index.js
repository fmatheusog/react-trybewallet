import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpenseAction } from '../../actions';
import Header from '../../components/Header';

const Wallet = () => {
  const [valueInput, setValueInput] = useState(0);
  const [descriptionInput, setDescriptionInput] = useState('');
  const [currencyInput, setCurrencyInput] = useState('');
  const [methodInput, setMethodInput] = useState('');
  const [tagInput, setTagInput] = useState('');

  const dispatch = useDispatch();

  const cleanInputs = () => {
    setValueInput(0);
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
            data-testid="currency-input"
            id="currency-input"
            onChange={ (e) => setCurrencyInput(e.target.value) }
          >
            <option>Teste</option>
          </select>

          Método de pagamento:
          <select
            data-testid="method-input"
            id="method-input"
            onChange={ (e) => setMethodInput(e.target.value) }
          >
            <option value=""> </option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
          </select>

          Categoria:
          <select
            data-testid="tag-input"
            id="tag-input"
            onChange={ (e) => setTagInput(e.target.value) }
          >
            <option> </option>
            <option>Teste</option>
          </select>

          <button
            type="button"
            onClick={ () => {
              dispatch(addExpenseAction({
                value: valueInput,
                description: descriptionInput,
                currency: currencyInput,
                method: methodInput,
                tag: tagInput,
              }));
              cleanInputs();
            } }
          >
            Adicionar despesa
          </button>
        </div>
      </div>
    </>
  );
};

export default Wallet;
