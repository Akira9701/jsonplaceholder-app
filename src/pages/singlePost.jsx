import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate, Link } from 'react-router-dom';

const SinglePost = () => {
    const [post, setPost] = useState();
    const {id} = useParams();
    const navigate = useNavigate();
    const loadServerPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + String(id))
        .then(response => response.json())
        .then(json => {
            localStorage.setItem('posts', JSON.stringify(json));
            return JSON.parse(localStorage.getItem('posts'));
        })
    }
    const postFromLocalStorage = () => {
        const posts = JSON.parse(localStorage.getItem('posts'))
        const postLocal = posts.filter((elem) => elem.id === Number(id))[0];
        return postLocal;
    }
    const handleBack = () =>{

        navigate(-1);
    }
    useEffect(() => {
        setPost(Object.keys(localStorage).length > 0 ? postFromLocalStorage() : loadServerPosts() );
        
    }, [])

    if (post) {
        return (
            <>
                <p className='first-letter:uppercase text-2xl font-extralight mb-4'>{post.title}</p>
                <p className='first-letter:uppercase mb-4'>{post.body}</p>
                {/* <p></p> */}
                <div>
                    <Link to={('/posts/edit/' + String(id)) } className='bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-md font-semibold text-white mr-2'>Eddit</Link>
                    <button className='bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-md font-semibold text-white mr-2' onClick={handleBack}>Back</button>
                </div>

            </>
        )
    }else{
        return 'Loading...'
    }

}


 
export default SinglePost;