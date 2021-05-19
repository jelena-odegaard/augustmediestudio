import Heading from "../layout/Heading";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import vector from './../images/9814.png';
import program_img from './../images/editing_program.jpg';
import meeting_img from './../images/meeting.jpg';
import camera_img from './../images/camera.jpg';

export default function Process() {
	return (
		<>
            <Jumbotron jumbotron-fluid="true" id="jumbotronProcess" style={{ backgroundImage: `url(${vector})`, backgroundRepeat: 'no-repeat' }}>
			<Heading content="Vår arbeidsprosess" />
            </Jumbotron>
            <Container>
                <Row>
                    <Col lg>
                        <h4>Pre-production</h4>
                        <p>Det første trinnet i prosessen med å lage et bilde | videoopptak handler om forberedelse og grunnlegging. Forproduksjonen starter etter møtet vårt. I løpet av denne fasen gjør vi den undersøkelsen, planleggingen, problemløsningen og organisasjonen som er nødvendig for å sette prosjektet ditt opp til å lykkes. </p>
                    </Col>
                    
                    <Col lg><img src={meeting_img} alt="Client meeting" width="550px"/></Col>
                </Row>
                    
                <Row>
                    <Col lg><img src={camera_img} alt="Camera" width="550px"/></Col>
                    <Col lg><h4>Production</h4>
                        <p>Produksjonen starter etter at vi har planlagt alt og sikret alt. Så det betyr at menyene, utstyret og alt annet materiale vi trenger for å produsere videoopptaket ditt fysisk. </p></Col>
                
                </Row>
                <Row>
                    <Col lg><h4>Post-production</h4>
                        <p>Etterproduksjonen starter etter det vi har samlet alle råvarene. Alt opptaket er deretter klart til å klippes, redigeres og monteres for den endelige leveringen. </p></Col>
                    <Col lg><img src={program_img} alt="Editing program" width="550px"/></Col>
                </Row>
        </Container>
		</>
	);
}