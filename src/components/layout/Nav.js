import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "./../images/logo.png";

function Navigation() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/");
	}

	return (
		
            <Navbar expand="lg" className="navbar">
                    <Navbar.Brand><Link to="/"><img src={logo} alt="August mediestudio logo" width="200pt"/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/" className="nav-link">
                                Hjem
                            </Link>
                            <Link to="/about" className="nav-link">
                                Om oss
                            </Link>
                            <Link to="/services" className="nav-link">
                                Våre tjenester
                            </Link>
                            <Link to="/process" className="nav-link">
                                Vår prosess
                            </Link>
                            <Link to="/portfolio" className="nav-link">
                                Portfolio
                            </Link>
                            <Link to="/contact" className="nav-link">
                                Kontakt
                            </Link>
                            {auth ? (
				                <>
					            <Link to="/dashboard" className="nav-link">Dashboard</Link> 
                                <Link to="/" id="logout" onClick={logout} className="nav-link">Log out</Link>
				                </>
			                    ) : (
				                <Link to="/login" className="nav-link" id="login">Logg inn</Link>
			                )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
			
			
		
	);
}

export default Navigation;