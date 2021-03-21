import React from 'react'
import './App.css'

function PizzaOrder(props) {
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

    return(
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>First Name:
                        <input
                            value = {values.firstName}
                            onChange = {onChange}
                            name = 'firstName'
                            type = 'text' />
                    </label>
                    <label>Last Name:
                        <input
                            value = {values.lastName}
                            onChange = {onChange}
                            name = 'lastName'
                            type = 'text' />
                    </label>
                </div>
                <div>
                    <label>Choose your crust:
                        <select
                        onChange = {onChange}
                        value = {values.crust}
                        name = 'crust'>
                            <option value = 'choose'>--Please Choose One Option--</option>
                            <option value = 'hand'> Hand Tossed</option>
                            <option value = 'deep'> Deep Dish</option>
                            <option value = 'ny'> New York</option>
                            <option value = 'gf'> Gluten Free</option>
                        </select>
                    </label>
                </div>
                <label>Choose your toppings:
                    <label>Pepperoni
                        <input
                            name = 'pepperoni'
                            type = 'checkbox'
                            checked = {values.pepperoni}
                            onChange = {onChange} />
                    </label>
                    <label>Sausage
                        <input
                            name = 'sausage'
                            type = 'checkbox'
                            checked = {values.sausage}
                            onChange = {onChange} />
                    </label>
                    <label>Mushroom
                        <input
                            name = 'mushroom'
                            type = 'checkbox'
                            checked = {values.mushroom}
                            onChange = {onChange} />
                    </label>
                    <label>Bacon
                        <input
                            name = 'bacon'
                            type = 'checkbox'
                            checked = {values.bacon}
                            onChange = {onChange} />
                    </label>
                </label>
                <div>
                    <label>Special Instructions:
                        <input
                            name = 'special'
                            type = 'text'
                            value = {values.speical}
                            onChange = {onChange} />
                    </label>
                </div>
                <button disable = {disabled}>Add to your order</button>
                <div>
                    <div>{errors.firstName}</div>
                    <div>{errors.lastName}</div>
                    <div>{errors.crust}</div>
                    <div>{errors.special}</div>
                </div>
            </form>
        </div>
    )
}

export default PizzaOrder