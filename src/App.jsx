import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import {useState, useEffect} from 'react';
import axios from './APIs/posts';
// import {
//   useQuery,
//   useQueryClient,
// } from '@tanstack/react-query';

export const ExpensesContext = React.createContext()

//  const DUMMY_EXPENSES = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/posts');
        let arExpenses = (response.data);
        arExpenses.forEach((item) => {
          item.date = new Date(item.date.slice(0, 10));
        })
        setExpenses(arExpenses);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }
    fetchPosts();
  }, []);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses)=>
                 {return [expense, ...prevExpenses]})
  }


  // const queryClient = useQueryClient()

  // const {data, status} = useQuery(['posts'], getPosts)

  // if (status.isSuccess) {
  //   let arExpenses = (data);
  //        arExpenses.forEach((item) => {
  //          item.date = new Date(item.date.slice(0, 10));
  //        })
  //        setExpenses(arExpenses);
  //       }
  return (
    <div>
    <ExpensesContext.Provider value={{expenses, setExpenses}}>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </ExpensesContext.Provider>
    </div>
  );
}


export default App
