//create an about page 
import React from 'react';
import { useAddPostMutation } from '../redux/api/apiSlice';

function AddPosts({}){
    const [addPost, {isLoading, isError, isSuccess, data}] = useAddPostMutation();
    return (
        <div>

            <h1>Add Post</h1>
            <p>Here you can add a dummy post</p>
            
            <button 
                onClick={
                    () => addPost({
                        title: 'New Post', 
                        body: 'This is a new post', 
                        userId: 5
                    })
                }
            >
                Add a Dummy Post
            </button>

            {
                isLoading && <p>Adding post...</p>
            }

            {
                isSuccess && <p>Post added successfully</p>
            }

            {
                isError && <p>Something went wrong</p>
            }

            {
                data && <p>{data.title} - {data.body}</p>
            }


        </div>
    );
}
export default AddPosts;
