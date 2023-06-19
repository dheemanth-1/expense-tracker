/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ExpensesContext } from '../../App';
import axios from '../../APIs/posts';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UpdateModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {expenses, setExpenses} = React.useContext(ExpensesContext)

  let updatingExpense = expenses.find((expense) => props.id === expense.id)
 
  const [enteredTitle, setEnteredTitle] = React.useState(updatingExpense.title)
    
  const [enteredAmount, setEnteredAmount] = React.useState(updatingExpense.amount)

  const [enteredDate, setEnteredDate] = React.useState(updatingExpense.date)

  const displayDate = new Date(enteredDate).toISOString().slice(0, 10)

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
}

const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
}

const handleUpdate = async (event) => {
    event.preventDefault();

        const expenseData = {
            id: props.id,
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
    
    let sendingExpenseData = {...expenseData}
    sendingExpenseData.date = sendingExpenseData.date.toISOString().slice(0, 10)
    try {
    const response = await axios.put(`/posts/${props.id}`, sendingExpenseData)
    console.log(response.data)
    setExpenses(expenses.filter((expense)=>expense.id != props.id))
    setExpenses((prevExpenses)=>
                 {return [expenseData, ...prevExpenses]})
  
    } catch (err) {
      console.log(`Error:${err.message}`)
    }
    handleClose()
}

  return (
    <div>
      <Button onClick={handleOpen} size='small'><img width="48" height="48" src="https://img.icons8.com/fluency/48/edit.png" alt="edit"/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Item:
          </Typography>
          <div className = "new-expense__controls">
                <div className = "new-expense__control">
                    <label>Text:</label>
                    <input type='text' value={enteredTitle}  onChange={titleChangeHandler}/>
                </div>
                <div className = "new-expense__control">
                    <label>Amount:</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className = "new-expense__control">
                    <label >Date:</label>
                    <input type='date' min='2020-01-01' max='2025-12-31' value={displayDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <Button type='button' onClick={handleClose}>Cancel</Button>
                <Button type='submit' onClick={handleUpdate}>Update Expense</Button>
            </div>
        </Box>
      </Modal>
    </div>
  );
}

