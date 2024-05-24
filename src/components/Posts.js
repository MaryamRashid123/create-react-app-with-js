//create a home page 
import React from 'react';
import { useGetPostsQuery } from '../redux/api/apiSlice';

function Posts(){
    const { data, error, isLoading } = useGetPostsQuery();

    return (
        <>
        <div>
            <h1>Posts</h1>
            <p>Here is a list of all posts</p>
            
        </div>
        <div className={'posts'}>
            {
                isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Something went wrong</p>
                ) : (
                    <div>
                        {data?.posts?.map((post) => (
                            <div key={post.id}>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
        </>
    );
}
export default Posts;
