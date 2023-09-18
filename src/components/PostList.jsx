import { useEffect, useState } from 'react';
import axios from 'axios';
import './PostList.css';

import Loader from './Loader';
import Post from './Post';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts'
                );
                if (res.status === 200) {
                    setPosts(res.data);
                } else {
                    throw new Error(
                        `Failed to fetch posts with status : ${res.status}`
                    );
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        getPosts();
    }, []);
    return (
        <div>
            {isLoading && <Loader />}
            {error && <p>{error}</p>}
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
