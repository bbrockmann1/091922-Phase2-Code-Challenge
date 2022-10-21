import React, { useState } from "react";

function Search({ handleChange, setTransactions, transactions }) {
  const [fieldInput, setFieldInput] = useState('');

  function handleChange(e) {
    setFieldInput(e.target.value)

    const filteredResults = transactions.filter((transaction) => {
      return transaction.description.toLowerCase().includes(fieldInput.toLowerCase());
    });

    setTransactions(filteredResults)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={fieldInput}
        onChange={handleChange}

      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
