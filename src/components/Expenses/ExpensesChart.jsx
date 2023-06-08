/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
// import Chart from "../Chart/Chart"
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts'

const ExpensesChart = props => {
    const chartDataPoints = [{label: 'Jan', value: 0},
                             {label: 'Feb', value: 0},
                             {label: 'Mar', value: 0},
                             {label: 'Apr', value: 0},
                             {label: 'May', value: 0},
                             {label: 'Jun', value: 0},
                             {label: 'Jul', value: 0},
                             {label: 'Aug', value: 0},
                             {label: 'Sep', value: 0},
                             {label: 'Oct', value: 0},
                             {label: 'Nov', value: 0},
                             {label: 'Dec', value: 0},
                            ]
    
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth()
        chartDataPoints[expenseMonth].value += expense.amount
    } 
    
    return <>
               {/*<Chart dataPoints={chartDataPoints}/>*/}
               <BarChart width={730} height={250} data={chartDataPoints}>
                    <CartesianGrid strokeDasharray="3 3" fill="#242424"/>
                    <XAxis dataKey='label' />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey='value' fill="#8884d8" />
                </BarChart>
           </>
}

export default ExpensesChart