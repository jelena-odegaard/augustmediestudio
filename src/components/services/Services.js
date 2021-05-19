import Heading from "../layout/Heading";
import Jumbotron from 'react-bootstrap/Jumbotron';
import background_lights from './../images/background_lights.jpg';
import { FaHandshake } from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi';
import { MdOndemandVideo } from 'react-icons/md';
import portfolio from './../images/portfolio.png';
import list from './../images/list.png';
import clapperboard from './../images/cinema-clapperboard.png';
import movie from './../images/hd-movie.png';


export default function Services() {
	return (
		<>
            <Jumbotron jumbotron-fluid="true" style={{ backgroundImage: `url(${background_lights})`, backgroundSize: 'cover' }}>
                <Heading content="Hvorfor er et mediestudio viktig for prosjektet ditt?" />
            </Jumbotron>
            <div className="infoContainer">
                <div>
                    <div className="icon" >
                        <FaHandshake size={70}/>
                    </div>
                    <ul>
                        <li> Møte: Nøkkelmeldinger, identifiser publikum, angi tidslinjer </li>
                        <li> Forskning: Forstå historier og mål </li>
                        <li> Strategisk visjon: Historieidentifikasjon, storyboarding, planlegging og forberedelse av skudd </li> 
                        <li> Video moodboard </li>
                        <li> Budsjett </li>
                        <li> Historievalg </li>
                        <li> Prosjektets tidslinje </li>
                        <li> Skapelse av skript </li>
                        <li> Produksjonsteam / utstyrsbehov</li>
                    </ul>
                </div>
                <div>
                    <div className="icon" >
                        <BiCameraMovie size={70}/>
                    </div>
                    <ul>
                        <li> Sette opp / belysning / foto / videoutstyr </li>
                        <li> Innholdsoppretting </li>
                        <li> Gjennomføring av separalsettene </li> 
                        <li> Administrere bildet | videoopptak og holde tidslinjen intakt </li>
                        <li> Fange b-roll (ekstra opptak som brukes til å støtte historien din) </li>
                    </ul>
                </div>
                <div>
                    <div className="icon" >
                        <MdOndemandVideo size={70}/>
                    </div>
                    <ul>
                        <li> Innholdsvurdering: Logging og forhåndsvalg av bildene </li>
                        <li> Forvalg av de beste bildene </li>
                        <li> Musikkvalg</li> 
                        <li> Videoredigering </li>
                        <li> Produserer den siste historien </li>
                        <li> Vurderinger / godkjenninger </li>
                        <li> Siste levering </li>
                    </ul>
                </div>
            </div>
            <div>
				<h3>Hva er det vi gjør?</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                                                         </p>
			</div>
            <div>
                <img src={portfolio} alt="Design research board" width="100px"/>
                <img src={list} alt="Paper list and a pencil"width="100px"/>
                <img src={clapperboard} alt="Filming clapperboard"width="100px"/>
                <img src={movie} alt="HD movie on a screen"width="100px"/>
            </div>
		</>
	);
}