import * as yup from 'yup'

const FormSchema = yup.object().shape({
    firstName: yup.string().required('Please enter your first name').min(3, 'must be longer than 3 characters'),

    lastName: yup.string().required('Please enter your last name').min(3, 'must be longer than 3 characters'),

    crust: yup.string().oneOf(['hand', 'deep', 'ny', 'gf'], 'Please choose crust type'),

    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushroom: yup.boolean(),
    bacon: yup.boolean(),

    special: yup.string().required('Please enter any special instructions')
})

export default FormSchema