import _ from "lodash";
import { Link } from "react-router-dom";
const Pagination = ({step, postsCount}) => {
    const itemsCount = _.range(0, Math.ceil(postsCount/step))
    console.log(itemsCount);
    return ( 
        <div className="pagination">
            <ul className="flex">
                {
                    itemsCount.map((el) => <li key={el} className="border border-sky-500 mr-2  p-1 border-solid rounded-md w-8 h-8 flex items-center justify-center	"><Link to={('/posts/page/' + String(el))}>{el}</Link></li> )
                }
            </ul>
        </div>
    );
}
 
export default Pagination;