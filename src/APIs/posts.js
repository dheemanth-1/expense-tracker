import axios from 'axios';

export default axios.create({
    baseURL:' http://localhost:3500'
})

// export const getPosts = async () => {
//     const response = await postsAPI.get('/posts')
//     return response.data
// }

// export const addPosts = async (post) => {
//     return await postsAPI.post('/posts', post)
// }

// export const updatePosts = async (post) => {
//     return await postsAPI.put(`/posts${post.id}`, post)
// }

// export const deletePosts = async (id) => {
//     return await postsAPI.delete(`/posts${id}`)
// }

// export default postsAPI;