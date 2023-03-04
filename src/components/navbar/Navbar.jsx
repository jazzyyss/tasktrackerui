import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../login/Login'
import './navbar.css'

const Navbar = ({status}) => {
    const navigate = useNavigate()
    const [toggleLogin,setToggleLogin] = useState(false)

    const handleLogout = _ =>{
        navigate('/',{ replace: true })
    }

    return(<>
        {
            status!=='main'&&(
                <div className={`lgnDia ${!toggleLogin?'':'active'}`} onClick={_=> setToggleLogin(!toggleLogin)}>
                    <div className="lgn" onClick={e=> e.stopPropagation()}>
                        <Login />
                    </div>
                </div>
            )
        }
        
            
        <div className="navbarContainer">
            <div className="logo" onClick={_=>console.log(toggleLogin)}>Task<span>Tracker</span></div>
            {status!=='regis' && status!=='main' &&(
                <div className="buttonsss">
                    <button className="buttonss loginBtn" onClick={_=> setToggleLogin(!toggleLogin)}>Login</button>
                    <button className="buttonss registerBtn" onClick={_=>navigate('/register')}>Register</button>
                </div>
            )}
            {status==='main' &&(
                <div className="buttonsss">
                    <button className="buttonss loginBtn" onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
        </>)
}

export default Navbar