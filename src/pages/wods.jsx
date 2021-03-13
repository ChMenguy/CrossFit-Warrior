import Nav from '../components/nav'
import WodGirlImage from '../img/wodgirl.jpg'
import WodHeroImage from '../img/wodhero.jpg'
import {Link} from "react-router-dom";

function Wods(){
    return(
        <>
        <Nav />
        <div className="container wodtitle">
            <h1>CHOISIS TON CHALLENGE</h1>
        </div>
        <div className="container wodschoise">
        <Link className="wodlink"to="/wodgirl">
            <div className="card" style={{"width" : "30em"}} >
                <img className="card-img-top" src={WodGirlImage} alt="Card image cap"></img>
                <div className="card-body">
                    <h2>WOD GIRL</h2>
                </div>
            </div>
        </Link>
        <Link className="wodlink"to="/wodhero">
        <div className="card" style={{"width" : "30em"}}>
            <img className="card-img-top" src={WodHeroImage} alt="Card image cap"></img>
            <div className="card-body">
                <h2>WOD HERO</h2>
            </div>
        </div>
        </Link>
        </div>

        </>
    )
}

export default Wods