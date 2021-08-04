import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

function NewExpense(props) {
    function saveEexpenseDataHandler(enterdExpenseData) {
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveEexpenseDataHandler} />
        </div>
    );
};

export default NewExpense;