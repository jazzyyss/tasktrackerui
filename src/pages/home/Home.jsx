import {faListCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/footer/Footer";

import Navbar from '../../components/navbar/Navbar'
import './home.css'

const Home = _ => {
    return(
        <div className="homeContainer">
            <Navbar />
            <div className="bodyContainer">
                <div className="leftPart">
                    <p>Stay on track <br /> with your tasks!</p>
                    <p>Stay ahead.</p>
                </div>
                <div className="rightPart">
                    <FontAwesomeIcon icon={faListCheck} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home