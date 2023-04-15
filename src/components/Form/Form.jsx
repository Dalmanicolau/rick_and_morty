import { useState } from 'react';
import validation from './validation';

const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        
        setErrors(validation({ ...userData, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefalut();
        login(userData)

    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor = "email">Email:  </label>
                <input type= 'text' name = "email" value = {userData.email}
                placeholder = "ingrese su mail" onChange={handleChange} />
            {errors.email ? <p>{errors.email}</p>:''}
            </div>
            <div>
            <label htmlFor = "password"> Password: </label>
                <input name = "password" type="password" value = {userData.password}
             placeholder = "ingrese su contraseña" onChange = {handleChange} />
             {errors.password ? <p>{errors.password}</p>:''}
            <hr />
            <button disabled= {!userData.email || !userData.password 
                || errors.email || errors.password}>SUBMIT</button>
            </div>
        </form>
    )
}
export default Form;
