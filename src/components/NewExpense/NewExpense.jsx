import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
import {useState} from 'react'
import axios from '../../APIs/posts'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }


    const saveExpenseDataHandler = async (enteredExpenseData) => {
        const expenseData = {
            id: Math.floor(Math.random() * 1_000_000_000).toString(),
            ...enteredExpenseData
        }
        // eslint-disable-next-line react/prop-types
        props.onAddExpense(expenseData)

        let sendingExpenseData = {...expenseData}
        
        sendingExpenseData.date = sendingExpenseData.date.toISOString().slice(0, 10)
        try {
        const response = await axios.post('/posts', sendingExpenseData)
        console.log(response.data)
        }
        catch (err) {
            console.log(`Error: ${err.message}`)
        }
        
        setIsEditing(false)
    }
       
    
    
    return (
        <div className="new-expense">
            {!isEditing && <><h2>Expense Tracker</h2><button onClick={startEditingHandler}>Add New Expense</button></>}
            {isEditing && <ExpenseForm 
                           onSaveExpenseData={saveExpenseDataHandler}
                           onCancel={stopEditingHandler}
                           />}
        </div>
    )    
}

export default NewExpense