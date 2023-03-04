import './login.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import FormInput from '../formInput/FormInput'
import FormButton from '../formButton/FormButton'
import http from '../../services/httpservice'




const Login = _ => {

    const [credentials, setCredentials] = useState({username: '', password: ''})
    const {username, password} = credentials

    const navigate = useNavigate()

    const handleChange = e =>{
        const { value, name } = e.target;
        setCredentials({ ...credentials, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await http.post(`http://localhost:8008/api/user/login`,credentials);
            setCredentials({username: '', password: ''})
            const {data} = res
            console.log(data)
            if(data.status!=='error')
                navigate('/home',{ replace: true })
        }catch(er){
            console.log(er) 
        }
    }

    return(<>
        <h1 className="lgnHead">Login</h1>
        <form onSubmit={handleSubmit} className="form-container">
            <FormInput
                type="username"
                name="username"
                handleChange={handleChange}
                value={username}
                placeholder="username..."
                required
            />
            <FormInput
                type="password"
                name="password"
                handleChange={handleChange}
                value={password}
                placeholder="password..."
                required
            />
            <FormButton type="submit" name="submit">Login</FormButton>
        </form>
    </>)
}

export default Login;