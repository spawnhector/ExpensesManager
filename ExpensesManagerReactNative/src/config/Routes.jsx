import React from 'react';

import {
  Route,
  Routes,
} from 'react-router-dom';

import CreateExpense from '../components/create-expense.component';
import EditExpense from '../components/edit-expense.component';
import ExpensesList from '../components/expenses-listing.component';
import Layout from '../components/layout';

const style = {
    body: {color: 'rgb(117, 117, 117)'}
}
const Routess = () => {
    return (
        <>
            <div style={style.body}>
            <Routes>
                <Route
                    path='/'
                    element={<Layout/>}
                >
                    <Route path="/create-expense" element={<CreateExpense/>} />
                    <Route path="/edit-expense/:id" element={
                        <EditExpense />
                    } />
                    <Route path="/expenses-listing" element={<ExpensesList/>} />
                </Route>
            </Routes>
        </div>
        </>
    );
}

export default Routess;
