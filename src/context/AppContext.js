import React, { createContext, useReducer } from 'react';
// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let new_expenses = [];
    switch (action.type) {
        case 'ADD_QUANTITY':
            let updatedqty = false;
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    updatedqty = true;
                    expense.total_allocation = expense.total_allocation + action.payload.ammount;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };
            case 'RED_QUANTITY':
                state.expenses.map((expense)=>{
                    if(expense.name === action.payload.name) {
                        expense.quantity = expense.quantity - action.payload.quantity;
                    }
                    expense.quantity = expense.quantity < 0 ? 0: expense.quantity;
                    new_expenses.push(expense);
                    return true;
                })
                state.expenses = new_expenses;
                action.type = "DONE";
                return {
                    ...state,
                };
        case 'DELETE_ITEM':
            state.expenses.map((expense)=>{
                if(expense.name === action.payload.name) {
                    expense.quantity = 0;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };
        case 'CHG_LOCATION':
            action.type = "DONE";
            state.Location = action.payload;
            return {
                ...state
            }

        case 'CHG_BUDGET':
            state.budget = Number(action.payload);
            action.type = "DONE";
            return {
                ...state
            };
        default:
            return state;
    }
};
// 1. Sets the initial state when the app loads
const initialState = {
    budget: 0,
    expenses: [
        { id: "Marketing", name: 'Marketing', total_allocation: 0 },
        { id: "Finance", name: 'Finance', total_allocation: 0 },
        { id: "Sales", name: 'Sales', total_allocation: 0 },
        { id: "Human Resource", name: 'Human Resource', total_allocation: 0 },
        { id: "IT", name: 'IT', total_allocation: 0 },
    ],
    Location: '£'
};
// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();
// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total = total + (item.total_allocation));
    }, 0);
    state.total_of_departments = totalExpenses;

    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                total_of_departments: state.total_of_departments,
                dispatch,
                Location: state.Location,
                budget: state.budget
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};