import Heading from "../../layout/Heading";
import AddPostForm from "./AddPostForm";
import PostList from "./PostList";

export default function AddPostPage() {
	return (
		<>
            <Heading size="3" content="Opprett et nytt innleg" />
            <AddPostForm/>
            <Heading size="4" content="Dine innlegg i porteføljen" />
            <PostList/>
		</>
	);
}