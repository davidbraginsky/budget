import { useState, useRef } from "react";

const Transaction = () => {
  const [expense, setExpense] = useState("");
  const [income, setIncome] = useState("");
  const [option, setOption] = useState("");

  const incomeOptionRef = useRef(null);
  const expenseOptionRef = useRef(null);
  const transferOptionRef = useRef(null);

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

  const resetOptionClasses = () => {
    incomeOptionRef.current.classList.remove("option--active");
    expenseOptionRef.current.classList.remove("option--active");
    transferOptionRef.current.classList.remove("option--active");
  };

  const optionChangeHandler = (e) => {
    resetOptionClasses();
    const option = e.target.innerText.toLowerCase();
    if (option === "income") {
      incomeOptionRef.current.classList.add("option--active");
    } else if (option === "expense") {
      expenseOptionRef.current.classList.add("option--active");
    } else if (option === "transfer") {
      transferOptionRef.current.classList.add("option--active");
    }
  };
  return (
    <div className="transaction">
      <div className="confirmation-row">
        <i className="fa-solid fa-xmark"></i>
        <i className="fa-solid fa-check"></i>
      </div>
      <div className="option-row">
        <div ref={incomeOptionRef} onClick={optionChangeHandler} className="option">
          Income
        </div>
        <div ref={expenseOptionRef} onClick={optionChangeHandler} className="option option--active">
          Expense
        </div>
        <div ref={transferOptionRef} onClick={optionChangeHandler} className="option">
          Transfer
        </div>
      </div>
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
};

export default Transaction;
