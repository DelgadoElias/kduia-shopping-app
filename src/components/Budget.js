import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, Location, total_of_departments } = useContext(AppContext);
    const [value, setValue] = React.useState(0)

    const handleChangeBudget = (event) => {

        if(Number(event.target.value) < total_of_departments){
            window.alert('You cannot reduce the value lower than the spending')
        } else {
            setValue(event.target.value)
            const number = event.target.value;
            dispatch({
                type: "CHG_BUDGET",
                payload: number
            })
        }
    }

    return (
        <div className='alert alert-info'>
            <span>Budget: {Location}</span>
            <input 
            onChange={handleChangeBudget} 
            step={10}
            type='number' 
            value={value} />
        </div>
    );
};
export default Budget;