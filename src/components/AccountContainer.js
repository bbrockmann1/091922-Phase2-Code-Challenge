 import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({ transactions, createTransaction, setTransactions }) {
  return (
    <div>
      <Search 
      transactions={transactions}
      setTransactions={setTransactions}
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
