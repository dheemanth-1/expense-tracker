/* eslint-disable react/prop-types */
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const dropdownChangeHandler= (event) => {
    const year = event.target.value
    // eslint-disable-next-line react/prop-types
    props.onChangeFilter(year)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;