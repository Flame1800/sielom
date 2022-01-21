import axios from "axios";

export const API = {}

const prodHost = process.env.API_HOST_PROD
const devHost = process.env.API_HOST_DEV

const url = process.env.NODE_ENV === 'production' ? prodHost : devHost

API.createRule = (post) => axios.post(`${url}/rules`, { data: post })
API.getRules = () => axios(`${url}/rules?populate=*`)
API.getRule = (id) => axios(`${url}/rules/${id}`)

API.getEvents = () => axios(`${url}/events?populate=*`)
API.getEvent = (id) => axios(`${url}/events/${id}?populate=*`)

API.getNews = () => axios(`${url}/news?populate=*`)
API.getNewPost = (id) => axios(`${url}/news/${id}?populate=*`)

API.getEmployeeRoles = () => axios(`${url}/employee-roles?populate=*`)