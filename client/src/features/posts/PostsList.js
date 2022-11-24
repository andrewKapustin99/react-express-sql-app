import React from 'react'
import { useSelector } from 'react-redux'
import PostElement from './PostElement';
import { getPostsError, getPostsStatus, selectPostsIds } from './postsSlice'

const PostsList = () => {

    const orderPostsIds = useSelector(selectPostsIds);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    let content;
    if (postStatus === 'loading') {
        content = <p>Loading...</p>
    } else if (postStatus === 'succeeded') {
        content = orderPostsIds.map(postId => <PostElement key={postId} postId={postId} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>
    }

    return (
        <section>{content}</section>
    )
}

export default PostsList