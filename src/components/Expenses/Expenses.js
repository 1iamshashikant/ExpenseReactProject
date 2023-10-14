import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const expensesList = [];

  props.items.forEach((expense) => {
    expensesList.push(
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        LocationOfExpenditure={expense.LocationOfExpenditure}
      />
    );
  });

  return <Card className="expenses">{expensesList}</Card>;
};

export default Expenses;

//old method
/* ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        LocationOfExpenditure={expenses[1].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        LocationOfExpenditure={expenses[2].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        LocationOfExpenditure={expenses[3].LocationOfExpenditure}
      ></ExpenseItem>
      */
