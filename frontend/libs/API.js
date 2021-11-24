import axios from "axios";

export const API = {}
const url = 'http://localhost:1337'

API.createPost = (post) => axios.post(`${url}/posts`, post)
API.getPosts = () => axios(`${url}/posts`)
API.getPost = (id) => axios(`${url}/posts/${id}`)