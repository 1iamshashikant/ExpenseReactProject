import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expeseTitle = "Car Insurance";
  const expenseAmount = "294.67";

  const locationOfExpenditure = "Lucknow";

  return (
    <div className="expense-item">
      <div className="dates">{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2 className="items">{expeseTitle}</h2>
        <div className="expense-item__location">{locationOfExpenditure}</div>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
