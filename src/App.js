import { useState } from "react";

function App() {
  const [expense, setExpense] = useState("");
  const [income, setIncome] = useState("");
  const [transactionList, setTransactionList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form was submitted");
    console.log("expense: ", expense);
    console.log("income: ", income);
  };

  const expenseChangeHandler = (e) => {
    setExpense(e.target.value);
  };

  const incomeChangeHandler = (e) => {
    setIncome(e.target.value);
  };

  return (
    <div className="container">
      <h1>Budget App</h1>
      <form onSubmit={submitHandler}>
        <div className="inputWrapper">
          <label htmlFor="expense">Expense</label>
          <input value={expense} onChange={expenseChangeHandler} type="number" id="expense" />
        </div>
        <div className="inputWrapper">
          <label htmlFor="income">Income</label>
          <input value={income} onChange={incomeChangeHandler} type="number" id="income" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
