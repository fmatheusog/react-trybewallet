import React from 'react';
import { useSelector } from 'react-redux';

function ExpensesTable() {
  const expenses = useSelector((state) => state.wallet.expenses);

  return (
    <div>
      <table className="expenses-table">
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {
          expenses.map((expense) => (
            <tr key={ expense.id }>
              <td>{ expense.description }</td>
              <td>{ expense.tag }</td>
              <td>{ expense.method }</td>
              <td>{ expense.value }</td>
              <td>{ expense.exchangeRates[expense.currency].name }</td>
              <td>{ Number(expense.exchangeRates[expense.currency].ask).toFixed(2) }</td>
              <td>
                {
                  Number(expense.value * expense.exchangeRates[expense.currency].ask)
                    .toFixed(2)
                }
              </td>
              <td>Real</td>
              <td>{ }</td>
            </tr>
          ))
        }
      </table>
    </div>
  );
}

export default ExpensesTable;
