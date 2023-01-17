import _ from "lodash";
import { Link } from "react-router-dom";
const Pagination = ({step, postsCount, setPage, activePage}) => {
    const itemsCount = _.range(0, (postsCount/step))
    console.log(itemsCount);
    console.log(activePage)
    return ( 
        <div className="pagination">
            <ul className="flex">
                {
                    itemsCount.map((el) => <li key={el} onClick={(page) => {setPage(el+1)} } className={(Number(activePage) === el+1 ? "bg-sky-500 text-white" : "") + " border border-sky-500 mr-2  p-1 border-solid rounded-md w-8 h-8 flex items-center justify-center cursor-pointer"}>{el+1}</li> )
                }
            </ul>
        </div>
    );
}
 
export default Pagination;