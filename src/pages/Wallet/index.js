import React from 'react';
import Header from '../../components/Header';

const Wallet = () => (
  <>
    <Header />
    <div className="wallet-page">
      <div className="expenses-add-form">
        <label htmlFor="value-input">
          Valor da despesa:
          <input
            type=""
            data-testid="value-input"
            id="value-input"
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            type="text"
            data-testid="description-input"
            id="description-input"
          />
        </label>

        Moeda:
        <select
          data-testid="currency-input"
          id="currency-input"
        >
          <option>Teste</option>
        </select>

        Método de pagamento:
        <select
          data-testid="method-input"
          id="method-input"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Dinheiro">Cartão de débito</option>
          <option value="Dinheiro">Cartão de crédito</option>
        </select>

        Categoria:
        <select
          data-testid="tag-input"
          id="tag-input"
        >
          <option>Teste</option>
        </select>

        <button
          type="button"
        >
          Adicionar despesa
        </button>
      </div>
    </div>
  </>
);

export default Wallet;
