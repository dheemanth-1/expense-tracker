/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList  from "./ExpensesList"
import './Expenses.css'
import {useState} from 'react'

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (year) => {
        setFilteredYear(year)
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    
    return (
    <div>
    <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesList items = {filteredExpenses}/>
    </Card>
    </div>)
}
export default Expenses