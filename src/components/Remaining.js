import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ReaminingBudget = () => {
    const { total_of_departments, Location, budget } = useContext(AppContext);
    const totalExpenses = Number(budget) - Number(total_of_departments);
    return (
        <div className='alert alert-primary'>
            <span>Remaining: {Location}{totalExpenses}</span>
        </div>
    );
};
export default ReaminingBudget;