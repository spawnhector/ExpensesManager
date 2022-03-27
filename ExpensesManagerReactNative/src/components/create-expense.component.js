import React, { useState } from 'react';

import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2';

import ExpensesList from './expenses-listing.component';

const CreateExpense = () => {
    const [expenseInfo,setExpenseInfo] = useState({
        name: '',
        amount: '',
        description: ''
    });

    
  function onChangeExpenseName(e) {
    setExpenseInfo(prev => {
        return { ...prev,name: e.target.value }
    })
  }

  function onChangeExpenseAmount(e) {
    setExpenseInfo(prev => {
        return { ...prev,amount: e.target.value }
    })
  }

  function onChangeExpenseDescription(e) {
    setExpenseInfo(prev => {
        return { ...prev,description: e.target.value }
    })
  }

  function onSubmit(e) {
    e.preventDefault()
     const expense = {
      name: expenseInfo.name,
      amount: expenseInfo.amount,
      description: expenseInfo.description
    };
    axios.post('http://localhost:8000/api/expenses/', expense)
      .then(res => {
        console.log(res.data)
        setExpenseInfo({name: '', amount: '', description: ''})
      });
        // console.log(`Expense successfully created!`);
        // console.log(`Name: ${state.name}`);
        // console.log(`Amount: ${state.amount}`);
        // console.log(`Description: ${state.description}`);
    Swal.fire(
        'Good job!',
        'Expense Added Successfully',
        'success'
    )

  }

  let styles = {
    row: {
      marginRight: 0
    },
    formWrapper: {
        padding: 10
    }
}
    return (<div className="form-wrapper" style={styles.formWrapper}>
    <Form onSubmit={onSubmit}>
        <Row style={styles.row}> 
            <Col>
            <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={expenseInfo.name} onChange={onChangeExpenseName}/>
            </Form.Group>
            
            </Col>
            
            <Col>
            <Form.Group controlId="Amount">
                <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" value={expenseInfo.amount} onChange={onChangeExpenseAmount}/>
            </Form.Group>
            </Col>  
        
        </Row>
            

        <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="textarea" value={expenseInfo.description} onChange={onChangeExpenseDescription}/>
        </Form.Group>

    
        <Button variant="primary" size="lg" block="block" type="submit">
        Add Expense
        </Button>
    </Form>
    <br></br>
    <br></br>

    <ExpensesList/>
    </div>);
}

export default CreateExpense;
