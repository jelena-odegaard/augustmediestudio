import Heading from "../layout/Heading";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headphones_img from './../images/headphones_Xd.jpg';
import studio_img from './../images/for_Xd.jpg';
import program_img from './../images/editing_program.jpg';
import meeting_img from './../images/meeting.jpg';
import camera_img from './../images/camera.jpg';
import avonova from './../images/avonova.png';
import pashn from './../images/pashn.png';
import ingenii from './../images/ingenii.jpg';
import { Link } from "react-router-dom";


export default function Home() {
	return <>
        <div className="Header_container">
            <div className="main_cta">
                <Heading content="Du drømmer"></Heading>
                <h2 className="cta_title">Vi skaper</h2> 
                <p>Har du en ide, men ikke midler til å gjøre den til (digital) virkelighet?<br></br>Sjekk ut hva vi gjør, og hvordan vi kan hjelpe deg.</p>
                <button><Link to="/services">Finn ut mer</Link></button>
            </div>
            <div className="carousel_container">
                <Carousel slide={false} fade={false}>
                    <Carousel.Item>
                        <img className="d-block w-60" src={headphones_img} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-60" src={studio_img} alt="Second slide"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        <div className="cta_container">
            <h3>Bare himmelen er grensen</h3>
            <p>Som et produksjonsfirma med full service skaper og produserer vår gruppe av innovative hjerner innhold for læringsplattformer, reklame og sosiale medier. Vi lager, utvikler og produserer videoer og digitalt innhold for publikum i alle aldre på forskjellige digitale plattformer.</p>
            <button><Link to="/process">Vår arbeidsprosess</Link></button>
        </div>
        <Container className="collage">
            <Row>
                <Col lg className="pink">
                    <h4>Some title</h4>
                    <p>Anim aute id magna aliqua ad ad non deserunt sunt. 
                        Qui irure qui lorem cupidatat commodo. </p>
                </Col>
                <Col lg><img src={camera_img} alt="Camera" width="400px" /></Col>
                <Col lg className="purple">
                    <h4>Some title</h4>
                    <p>Anim aute id magna aliqua ad ad non deserunt sunt. 
                        Qui irure qui lorem cupidatat commodo. </p></Col>
            </Row>
            <Row>
                <Col lg><img src={program_img} alt="Editing program" width="400px"/></Col>
                <Col lg className="salmon">
                    <h4>Some title</h4>
                    <p>Anim aute id magna aliqua ad ad non deserunt sunt. 
                        Qui irure qui lorem cupidatat commodo. </p></Col>
                <Col lg><img src={meeting_img} alt="Client meeting" width="400px"/></Col>
            </Row>
        </Container>
        <div>
            <h3>Noen av våre klienter</h3>
            <div>
                <img src={avonova} alt="Company Avonova's logo"  width="300px"/>
                <img src={pashn} alt="Company Pashn's logo" width="300px"/>
                <img src={ingenii} alt="Company Ingenii's logo" width="300px"/>
            </div>
        </div>
    </>;
}