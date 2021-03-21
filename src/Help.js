import React from 'react'
import './App.css'

function Help(props) {
    const {values, submit, change, errors, disabled} = props

    const onSubmit = e => {
        e.preventDefault();
        submit(alert(`Name on order: ${values.firstName} ${values.lastName}
        Crust: ${values.crust}
        Special Instructions: ${values.special}`))
    }

    const onChange = e => {
        let {name, value} = e.target
        if(e.target === 'checkbox') {
            value = e.target.checked
        }
        change(name,value)
    }

   
}

export default Help