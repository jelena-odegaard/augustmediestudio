import Heading from "../layout/Heading";
import Jumbotron from 'react-bootstrap/Jumbotron';
import background_camera from './../images/background_camera.jpg';
import VideoStamina from './VideoStamina';
import VideoTransport from './VideoTransport';
import VideoHelse from './VideoHelse';
import VideoSafety from "./VideoSafety";
import PublishedPostList from "./PublishedPostList";


export default function Portfolio() {
	return (
		<>
			<Jumbotron jumbotron-fluid="true" style={{ backgroundImage: `url(${background_camera})`, backgroundSize: 'cover' }}>
				<Heading content="Ta en titt i vårt arbeid" />
			</Jumbotron>
			<PublishedPostList/>
			<h3>Her kan du få innblikk i våre ferdige videomateriale</h3>
			<div className="video-wrapper">
				<div className="videoGroupOne">
					<VideoStamina/>
					<VideoTransport/>
				</div>
				<div className="videoGroupTwo">
					<VideoHelse/>
					<VideoSafety/>
				</div>
			</div>
		</>
	);
}