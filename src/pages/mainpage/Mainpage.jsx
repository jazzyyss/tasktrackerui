import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './mainpage.css'

const Mainpage = _ =>{
    return(<>
        <Navbar status='main'/>
        <div className="mainController">
            MainPage
        </div>
        <Footer />
    </>)
}

export default Mainpage;