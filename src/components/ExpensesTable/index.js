import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../../actions';

function ExpensesTable() {
  const expenses = useSelector((state) => state.wallet.expenses);

  const dispatch = useDispatch();

  return (
    <div>
      <table className="expenses-table">
        <thead>
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
                    onClick={ (e) => dispatch(deleteExpense(e.target.id)) }
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
  );
}

export default ExpensesTable;
