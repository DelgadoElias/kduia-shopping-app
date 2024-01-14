import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaTimesCircle } from 'react-icons/fa';
const DepartmentItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);
    const handleDecreaseTenPounds = () => {
        const item = {
            name: props.name,
        };
        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handleIncreaseTenPounds = () => {
        const item = {
            name: props.name
        };
        dispatch({
            type: 'INCREASE_BY_TEN',
            payload: item.name,
        })
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{Location}{parseInt(props.total_allocation)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncreaseTenPounds}></FaPlusCircle></td>
        <td><FaTimesCircle size='2.2em' color="red" onClick={handleDecreaseTenPounds}></FaTimesCircle></td>
        </tr>
    );
};
export default DepartmentItem;