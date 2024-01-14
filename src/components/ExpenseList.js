import React, { useContext } from 'react';
import DepartmentItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
const DepartmentList = () => {
    const { expenses } = useContext(AppContext);
    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Decrease by 10</th>
            </tr>
          </thead>
            <tbody>
            {expenses.map((expense) => (
                <DepartmentItem 
                id={expense.id} 
                key={expense.id} 
                name={expense.name} 
                total_allocation={expense.total_allocation} />
            ))}
            </tbody>
        </table>
    );
};
export default DepartmentList;