import './navbar.css'

const Navbar = _ => {
    return(
        <div className="navbarContainer">
            <div className="logo">Task<span>Tracker</span></div>
            <div className="buttons">
                <button className="button loginBtn">Login</button>
                <button className="button registerBtn">Register</button>
            </div>
        </div>
    )
}

export default Navbar