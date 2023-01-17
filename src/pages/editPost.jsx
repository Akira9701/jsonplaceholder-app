import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const EditPost = () => {
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


    useEffect(() => {
        setPost(Object.keys(localStorage).length > 0 ? postFromLocalStorage() : loadServerPosts() );
        
    }, [])

    if (post) {

        const handleBack = () =>{
            navigate(-1);
        }
    
        const handleChange = () => {
            const newTitle = document.querySelector('.edit_title').value;
            const newText = document.querySelector('.edit_text').value;
            const newPost = {...post};
            newPost.title = newTitle;
            newPost.body = newText;
            let posts = JSON.parse(localStorage.getItem('posts'));  
            const index = posts.findIndex(el => el.id  ===  newPost.id);
            posts[index] = newPost;
            localStorage.setItem('posts', JSON.stringify(posts));
            alert('Post edited');
            navigate(("/posts/" + String(id) ));

       

        }
        return (
            <>
                <textarea rows='1' cols='100' className='edit_title resize-none	rounded-md	 border-solid border-2 border-sky-500 text-2xl font-extralight mb-4 p-2 leading-5 w-full first-letter:uppercase ' defaultValue={post.title}></textarea>
                <textarea rows='10' cols='100' className='edit_text rounded-md	border-solid border-2 border-sky-500 mb-4 p-2 leading-5 w-full first-letter:uppercase' defaultValue={post.body}></textarea>
                <div>
                    <button className='bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-md font-semibold text-white mr-2' onClick={handleChange}>Set Post</button>
                    <button className='bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-md font-semibold text-white mr-2' onClick={handleBack}>Back</button>
                </div>

            </>
        )
    }else{
        return 'Loading...'
    }

}


 
export default EditPost;