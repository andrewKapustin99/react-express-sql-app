// import React from 'react'
// import {useSelector} from 'react-redux';
// import { selectAllPosts } from './postsSlice';


// const AddPostForm = () => {
//     const posts = useSelector(selectAllPosts);

//     const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

//     const renderedPosts = orderedPosts.map(post => (
//         <article key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//             <p className='postCredit'>
//                 !!!
//             </p>
//         </article>
//     ));

//     return (
//         <section>
//             <h2>Posts:</h2>
//             {renderedPosts}
//         </section>
//     )
// }

// export default AddPostForm