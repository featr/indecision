// const decrementCount = ({ decrementBy = 1 } = {}) => {
//     return {
//         type: "DECREMENT",
//         decrementBy: decrementBy

//     }
// }

// store.dispatch(decrementCount( { decrementBy:10 } ));


// const resetCount = () => {
//     return {
//         type: 'RESET'
//     }
// }

// store.dispatch(resetCount());

// const setCount = ({ count } = {}) => {
//     return {
//         type: 'SET',
//         count:count
//     }
// }

// store.dispatch(setCount({ count: 100 }));


// -------------------------------------------

import { createStore, combineReducers } from 'redux';

// const demoState = {
//     expenses: [{
//         id: 'xzczxcxz',
//         description: 'January Rent',
//         note: 'Final payment',
//         amount: 54500,
//         createdAt: 0
//     }],
        // filters: {
        //     text: 'rent',
        //     sortBy: 'amount',
        //     startDate: undefined,
        //     endDate: undefined
        // }
// }

// ADD_EXPENSE ACTION GENERATOR

const addExpense = ( {id = 'zxczcx', description = '', note='', amount = 0, createdAt = 0} = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id:id,
            description:description,
            note:note,
            amount:amount,
            createdAt:createdAt
        }
    }
}
// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id:id
    }
}
// EDIT_EXPENSE

const editExpense = (id, update) => {
    return {
        type: 'EDIT_EXPENSE',
        id:id,
        update:update

    }
}
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

const expensesReducerDefaultState = [];

const expensesReducer = ((state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {              
                return id !== action.id;
            })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.update
                    } 
                } else {
                        return state;
                    }
                
                
            })
        default: 
            return state;
        
                

            
    }
})

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = ((state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
})

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)
store.subscribe(() => {
    console.log(store.getState())
});

const expenseOne = store.dispatch(addExpense({ id: '1', description: 'Rent', note:'Payment for January', amount:54500, createdAt:'Today' }))
const expenseTwo = store.dispatch(addExpense({ id: '2', description: 'Dog', note:'Bought a new dog', amount:24500, createdAt:'Today' }))
store.dispatch(removeExpense({ id: expenseTwo.expense.id }))
store.dispatch(editExpense( expenseOne.expense.id, { description: 'Tequilla' }))

