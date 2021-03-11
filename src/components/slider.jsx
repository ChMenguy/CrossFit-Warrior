import background from '../img/slider.jpg'
import {Link} from "react-router-dom";
import Footer from '../components/footer'

function Slider(){
    return(
        <div className="container-fluid container" >
            <div className="slider" style={{ backgroundImage: `url(${background})`}}>
            <h1 className="title">BIENVENUE SUR CROSSFIT WARRIOR</h1>
            <button type="button" class="btn btn-warning button"><Link class = "btn btn-warning wodslink" to="/wods">CHOISIS TON CHALLENGE</Link></button></div>
        </div>
        
    )
}

export default Slider;