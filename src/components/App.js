import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [fieldInput, setFieldInput] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/transactions')
    .then(resp => resp.json())
    .then(transactionArray => {
      setTransactions(transactionArray);
    })
  }, [transactions])

  function createTransaction(transaction) {
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(transaction)
    };

    fetch('http://localhost:4000/transactions', configObj)
  };

  const filteredTransactions = transactions.filter(transaction => {
    return transaction.description.toLowerCase().includes(fieldInput.toLowerCase())
  });

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer 
        transactions={filteredTransactions}
        createTransaction={createTransaction}
        setFieldInput={setFieldInput}
        fieldInput={fieldInput}
      />
    </div>
  );
}

export default App;
