import { FaFacebook } from 'react-icons/fa';
import { FaVimeo } from 'react-icons/fa';
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function Footer(){
    return <>
        <footer>
            <Container  className="footerContainer">
                <div className="copyright">
                    <p>&#64; 2021 August mediestudio. All rights reserved.</p>
                </div>
                <div className="socilas">
                    <Link to="https://www.facebook.com/profile.php?id=540651923"><FaFacebook size={48}/></Link>
                    <Link to="https://vimeo.com/user110631532"><FaVimeo size={48}/></Link>
                </div>
            </Container>
        </footer>
    </>
}