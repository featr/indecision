// Export a stateless functional component
// description, amount, createdAt
import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

// Andrew's Method

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id}) => {
    return (
        <div>
            <h3>{description}</h3>
            <p>{amount} - {createdAt}</p>
            <button onClick = {() => {
                dispatch(removeExpense({ id })
                )}}>Remove</button>
        </div>
    )
}

export default connect()(ExpenseListItem);









// ----------------------------------------------------------------------

// My Method

// const ExpenseListItem = (props) => {
//     return (
//         <div>
//             {props.expenses.map(({description, amount, createdAt}) => {
//                 return <p>{description}, {amount}, {createdAt}</p>
//             })}
//         </div>
//     )
// }

// const mapToStateProps = (state) => {
//     return {
//         expenses: state.expenses
//     }
// }

// export default connect(mapToStateProps)(ExpenseListItem)