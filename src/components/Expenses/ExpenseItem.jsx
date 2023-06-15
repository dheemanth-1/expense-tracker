/* eslint-disable react/prop-types */
import { ExpensesContext } from '../../App'
import { useContext } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import {Button} from '@mui/material'
import UpdateModal from './UpdateModal'
import axios from '../../APIs/posts'


function ExpenseItem(props) {

    const {expenses, setExpenses} = useContext(ExpensesContext)

    const onDeleteHandler = async (id) => {
        
        if (confirm("Delete Item?") === true) {
            try {
                await axios.delete(`/posts/${id}`)
                setExpenses(expenses.filter((expense)=>expense.id != id))
            } catch (err) {
                console.log(`Error: ${err.message}`)
            }
        }
    }
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <UpdateModal id = {props.myKey}>📤</UpdateModal>
                <Button onClick={() => onDeleteHandler(props.myKey)}>❌</Button>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem