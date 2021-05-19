import Heading from "../layout/Heading";
import { Link } from "react-router-dom";

export default function DashboardPage() {
	return (
		<>
			<Heading size="3" content="Dashboard" />
			<p className="p-background">her kan du redigere innlegg i porteføljen din</p>
			<Link to="dashboard/posts/AddPostPage">Opprett et nytt innlegg</Link>
			<Link to="dashboard/posts/EditPostPage">Rediger innlegg</Link>
		</>
	);
}