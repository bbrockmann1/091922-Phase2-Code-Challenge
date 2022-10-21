 import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transactions, createTransaction, handleChange, setFieldInput }) {
  return (
    <div>
      <Search 
      transactions={transactions}
      handleChange={handleChange}
      setFieldInput={setFieldInput}
      />
      <AddTransactionForm
      createTransaction={createTransaction}
      />
      <TransactionsList 
      transactions={transactions}
      />
    </div>
  );
}

export default AccountContainer;
