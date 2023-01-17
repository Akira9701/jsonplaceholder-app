import { useState, useEffect } from "react";
import Post from "../components/postList";
import Pagination from "../components/pagination";
import { useSearchParams } from "react-router-dom";
import _ from "lodash";

const Posts = () => { 
    const [searchParams, setSearchParams] = useSearchParams();
    const [posts, setPosts] = useState();
    const page = searchParams.get('page') === null ? 1 : searchParams.get('page');
    const stepPage = 4;
    const loadServerPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(json => {
            localStorage.setItem('posts', JSON.stringify(json));
            return JSON.parse(localStorage.getItem('posts'));
        })
    }

    useEffect(() => {
        setPosts(Object.keys(localStorage).length > 0 ? JSON.parse(localStorage.getItem('posts')) : loadServerPosts() );
    }, [])

    const Title = () => {
        return <p className="text-2xl font-extralight mb-4">Post from JSON.placheolder</p>
    }

    const setPage = (pageNow) => {
        setSearchParams({page: pageNow});
    }   


    if(posts !== undefined){
        return ( 
            <>
                <Title />
                <ul className="list-disc ml-4 mb-5">
                    {
                        posts.slice(((page-1) * 4), (Number(page) * 4)).map((post) => <Post key={post.id} title={post.title} id={post.id}  />)
                    }
                </ul>
                <Pagination step={stepPage} postsCount={posts.length} setPage={setPage} activePage={page} />

            </>
        );
    }
}
 
export default Posts;