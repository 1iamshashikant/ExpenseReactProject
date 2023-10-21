import React from "react";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const handleDeleteExpense = () => {
    const expenseItem = document.querySelector(".expense-item");
    expenseItem.remove();
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <button onClick={handleDeleteExpense}>Delete expenses</button>
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        LocationOfExpenditure={props.LocationOfExpenditure}
      />
    </Card>
  );
};

export default ExpenseItem;
