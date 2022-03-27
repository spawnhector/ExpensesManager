import React from 'react';

import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ExpenseTableRow = props => {

    function deleteExpense() {
        const expenseObject = {
            id: props.obj.id,
        };
        axios.post('http://localhost:8000/api/expenses/delete',expenseObject)
            .then((res) => {
                console.log('Expense removed deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <tr>
            <td>{props.obj.name}</td>
            <td>{props.obj.amount}</td>
            <td>{props.obj.description}</td>
            <td>
                <Link className="edit-link" to={"/edit-expense/" + props.obj.id} key={props.obj.id}>
                   <Button size="sm" variant="info">Edit</Button>
                </Link>
                <Button onClick={deleteExpense} size="sm" variant="danger">Delete</Button>
            </td>
        </tr>
    );
}

export default ExpenseTableRow;