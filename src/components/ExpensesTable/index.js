import React from 'react';

function ExpensesTable() {
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
        </tr>
      </table>
    </div>
  );
}

export default ExpensesTable;
