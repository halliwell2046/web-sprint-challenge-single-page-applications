import React, { useState, useEffect } from "react";
import Pizza from './Pizza';
import * as yup from 'yup'
import axios from 'axios'
import { Route, Link, BrowserRouter, useHistory } from 'react-router-dom'
import './App.css'
import FormSchema from './FormSchema'
import PizzaOrder from './Pizza'
import { isInaccessible } from "@testing-library/dom";

const initialFormValues = {
  firstName: '',
  lastName: '',
  special: '',
  crust: '',
  pepperoni: false,
  sausage: false,
  mushroom: false,
  bacon: false,
}

const initialFormErrors = {
  firstName: '',
  lastName: '',
  special: '',
  crust: ''
};

const buttonValidate = 'true';
const information = [];

function Home() {
  const history = useHistory();

  function nextPage() {
    return(
      history.push('/pizza')
    )
  }

  return(
    <div className = 'App-header'>
      <div className = 'body-container'>
        <h1>Welcome to the Lambda Pizzeria!</h1>
        <p>Let's get your order started</p>
        <button onClick = {nextPage}>Click here to start your order</button>
      </div>
    </div>
  )
}

function App() {
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ info, setInfo ] = useState(information)
  const [ disabled, setDisabled ] = useState(buttonValidate)

  const inputChange = (name, value) => {
    yup.reach(FormSchema, name).validate(value)
    .then(res => {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    setFormValues({...formValues, [name]: value});
  }

  const postInfo = newInfo => {
    axios.post('https://reqres.in/api/users', newInfo)
    .then(res => {
      setInfo([...info, res.data])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log(err)
    });
  };

  const formSubmit = () => {
    const newInfo = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      special: formValues.special.trim(),
      crust: formValues.crust.trim(),
      toppings: ['pepperoni', 'sausage', 'mushroom', 'bacon'].filter(top => !!formValues[top])
    }
    postInfo(newInfo)
  }

  useEffect(() => {
    FormSchema.isValid(formValues)
    .then(isValid => {
      setDisabled(!isValid)
    })
  }, [formValues]);

  return (
    <BrowserRouter>
    <div className = 'App'>
      <nav className = 'App-link'>
        <Link to = '/'>Home</Link>
        <Link to = '/help'>Help</Link>
      </nav>
      

      <Route path = '/pizza'>
        <Pizza
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
        disabled={disabled} />
      </Route>
      <Route path = '/'>
        <Home/>
      </Route>
    </div>
    </BrowserRouter>
  );
};

export default App;
