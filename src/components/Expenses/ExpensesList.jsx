/* eslint-disable react/prop-types */
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'


const ExpensesList = props => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>No Expenses Found.</h2>
    } 
        
        return <ul className='expenses-list'>            
        <li>{props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title}
                                             amount={expense.amount}
                                             date={expense.date} myKey={expense.id}
                                        />)}</li>
        </ul>
}

export default ExpensesList