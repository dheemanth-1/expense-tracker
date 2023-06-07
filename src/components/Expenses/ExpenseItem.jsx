/* eslint-disable react/prop-types */
// import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
function ExpenseItem(props) {
    const onDeleteHandler = (id) => {
        if (confirm("Delete Item?") === true) {
            console.log("Not yet implimented ItemId:" + id)
        }
    }
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={() => onDeleteHandler(props.myKey)}>❌</button>
            </div>
        </Card>
    )
}

export default ExpenseItem