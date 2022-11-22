import React from 'react'
import { getPostsError, getPostsStatus, selectAllPosts } from './postsSlice'
import {useSelector} from 'react-redux'
import PostElement from './PostElement';

const PostList = () => {
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    let content;
    if(postStatus === 'loading') {
        content = <p>Loading...</p>;
    } else if(postStatus === 'succeeded') {
        const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderPosts.map(post => <PostElement key={post.id} post={post} />)
    } else if(postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            {content}
        </section>
    )
}

export default PostList