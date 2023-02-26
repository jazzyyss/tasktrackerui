import { useNavigate } from 'react-router-dom'
import './navbar.css'

const Navbar = ({status}) => {
    const navigate = useNavigate()

    return(
        <div className="navbarContainer">
            <div className="logo">Task<span>Tracker</span></div>
            {status!=='regis' && (
                <div className="buttonsss">
                    <button className="buttonss loginBtn" onClick={_=>navigate('/login')}>Login</button>
                    <button className="buttonss registerBtn" onClick={_=>navigate('/register')}>Register</button>
                </div>
            )}
        </div>
    )
}

export default Navbar