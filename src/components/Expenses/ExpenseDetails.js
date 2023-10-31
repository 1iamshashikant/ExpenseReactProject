import React, { useState } from "react";
import "./ExpenseItem.css";
const ExpenseDetails = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandlerUpdate = () => {
    setTitle("Updated!");
    console.log(title);
  };

  const clickHandlerChangeAmount = () => {
    setAmount(100);
  };

  return (
    <div>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div>
        <button className="button" onClick={clickHandlerUpdate}>
          Update Title
        </button>
        <button className="button" onClick={clickHandlerChangeAmount}>
          Change Amount
        </button>
      </div>
      <div className="expense-item__price">${amount}</div>
      <div className="expense-item__location">
        {props.LocationOfExpenditure}
      </div>
    </div>
  );
};

export default ExpenseDetails;
