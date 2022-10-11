import React from "react";
import { useState } from "react";
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false)
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditing = () => {
        setIsEditing(true);
    }

    const stopEditing = () => {
        setIsEditing(false);
    }

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditing}/>}
        </div>
    )
};

export default NewExpense