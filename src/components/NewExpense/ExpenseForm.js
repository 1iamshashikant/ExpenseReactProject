import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log("Title input:", event.target.value);
  };

  const amountChangeHandler = (event) => {
    console.log("Amount input:", event.target.value);
  };

  const dateChangeHandler = (event) => {
    console.log("Date input:", event.target.value);
  };

  return (
    <form>
      <div className="new-expense-controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler} />
        </div>

        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense_actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
