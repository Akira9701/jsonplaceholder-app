import { useState, useEffect } from "react";
import Post from "../components/postList";
const Posts = () => {

    const [posts, setPosts] = useState();
    const storageLength = Object.keys(localStorage).length;
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

    if(posts !== undefined){
        return ( 
            <>
                <Title />
                <ul className="list-disc ml-4">
                    {
                        posts.map((post) => <Post key={post.id} title={post.title} id={post.id}  />)
                    }
                </ul>
            </>
        );
    }
}
 
export default Posts;