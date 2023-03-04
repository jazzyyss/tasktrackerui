import {useState} from 'react'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import http from '../../services/httpservice'
//import {apiUrl} from '../../config.json';

import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import FormInput from '../../components/formInput/FormInput'
import FormButton from '../../components/formButton/FormButton'
import './register.css'

const Register = _ => {

    const [credentials, setCredentials] = useState({ firstName: '', lastName: '', username:'', email: '', password: '', secondPassword: '' })
    const { firstName, lastName, username, email, password, secondPassword } = credentials;
    const navigate = useNavigate()
    const handleChange = e =>{
        const { value, name } = e.target;
        setCredentials({ ...credentials, [name]: value })
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        if (password !== secondPassword) {
            toast.error('password mismatch');
            setCredentials({ ...credentials, password: '', secondPassword: '' })
        } else {
            try {
                //console.log(`http://localhost:8008/api/user/register`)
                const res = await http.post(`http://localhost:8008/api/user/register`,credentials);
                console.log(res)
                //toast.success(<div>You are registered successfully.<br />Please sign in to continue</div>);
               navigate('/',{ replace: true })
            }catch(er){
                console.log(er) 
            }
        }

    }

    return(<>
        <Navbar status='regis' />
        <div className="registerContainer">
            <div className="formContainer">
                <h1 className="heading">Register</h1>
                <form onSubmit={handleSubmit} className="form-container">
                <FormInput
                    type="firstName"
                    name="firstName"
                    handleChange={handleChange}
                    value={firstName}
                    placeholder="FirstName..."
                    required
                />
                <FormInput
                    type="lastName"
                    name="lastName"
                    handleChange={handleChange}
                    value={lastName}
                    placeholder="LastName..."
                    required
                />
                <FormInput
                    type="username"
                    name="username"
                    handleChange={handleChange}
                    value={username}
                    placeholder="username..."
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    handleChange={handleChange}
                    value={email}
                    placeholder="E-mail..."
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    handleChange={handleChange}
                    value={password}
                    placeholder="Password..."
                    required
                />
                <FormInput
                    type="password"
                    name="secondPassword"
                    handleChange={handleChange}
                    value={secondPassword}
                    placeholder="Retype-Password..."
                    required
                />
                <FormButton type="submit" name="submit">Register</FormButton>
            </form>
            </div>
        </div>
        <Footer />
    </>)
}

export default Register