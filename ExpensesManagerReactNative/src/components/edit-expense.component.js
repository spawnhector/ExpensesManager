import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';

const EditExpense = () => {
    const [expenseInfo,setExpenseInfo] = useState({
        name: '',
        amount: '',
        description: ''
    })
    const params = useParams();
    useEffect(()=>{
        console.log(params.id)
        axios.get('http://localhost:8000/api/expenses/show/' + params.id)
          .then(res => {
            setExpenseInfo({
              name: res.data.name,
              amount: res.data.amount,
              description: res.data.description
            });
          })
          .catch((error) => {
            console.log(error);
          })
    },[params]);
    
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
    
        const expenseObject = {
            id: params.id,
          name: expenseInfo.name,
          amount: expenseInfo.amount,
          description: expenseInfo.description
        };
    
        axios.post('http://localhost:8000/api/expenses/update', expenseObject)
          .then((res) => {
            console.log(res.data)
            console.log('Expense successfully updated')
          }).catch((error) => {
            console.log(error)
          })
    
        // Redirect to Expense List 
        // this.props.history.push('/expenses-listing')
      }
      const styles = {
        row: {
          marginRight: 0
        },
        formWrapper: {
            padding: 10
        }
    }
    return (<div className="form-wrapper" style={styles.formWrapper}>
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={expenseInfo.name} onChange={onChangeExpenseName} />
      </Form.Group>

      <Form.Group controlId="Amount">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="number" value={expenseInfo.amount} onChange={onChangeExpenseAmount} />
      </Form.Group>

      <Form.Group controlId="Description">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={expenseInfo.description} onChange={onChangeExpenseDescription} />
      </Form.Group>

      <Button variant="danger" size="lg" block="block" type="submit">
        Update Expense
      </Button>
    </Form>
  </div>);
}

export default EditExpense;
