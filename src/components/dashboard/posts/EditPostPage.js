import Heading from "../../layout/Heading";
import EditPostForm from "./EditPostForm";

export default function AddPostPage() {
	return (
		<>
            <Heading size="3" content="Rediger innleg" />
            <EditPostForm/>
		</>
	);
}