import React, { useEffect, useState } from "react";
import AccountContainer from "./AccountContainer";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/transactions')
    .then(resp => resp.json())
    .then(transactionArray => {
      setTransactions(transactionArray);
    })
  }, [])

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

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer 
        transactions={transactions}
        createTransaction={createTransaction}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default App;
