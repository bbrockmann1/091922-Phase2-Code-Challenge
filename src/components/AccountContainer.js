 import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transactions, createTransaction, setFieldInput, fieldInput }) {
  return (
    <div>
      <Search 
        setFieldInput={setFieldInput}
        fieldInput={fieldInput}
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
