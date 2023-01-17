import { Link } from "react-router-dom";
const Post = ({title, id}) => {
    return ( 
        <li className="mb-4 font-light">
            <Link to={String(id)}>{title}</Link>
        </li>
    );
}
 
export default Post;