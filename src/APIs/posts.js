import axios from 'axios';

export default axios.create({
    baseURL: import.meta.env.VITE_JSON_SERVER_URL
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