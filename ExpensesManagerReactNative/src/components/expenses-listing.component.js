import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import Table from 'react-bootstrap/Table';

import ExpenseTableRow from './ExpenseTableRow';

const ExpenseList = () => {
    const [expenses,setExpenses] = useState({
        expenses: ''
    });

    useEffect(()=>{

        axios.get('http://localhost:8000/api/expenses/')
        .then(res => {
            setExpenses(prev => {
                return {
                    ...prev,
                    expenses: res.data
                }
            });
        })
        .catch((error) => {
          console.log(error);
        })
    },[]);
    function DataTable() {
        if (expenses.expenses !== '') {
            return expenses.expenses.map((res, i) => {
                return <ExpenseTableRow obj={res} key={i} />;
            });
        }
    }

    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {DataTable()}
        </tbody>
      </Table>
    </div>);
}
export default ExpenseList;
