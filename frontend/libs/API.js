import axios from "axios";

export const API = {}

const prodHost = process.env.API_HOST_PROD
const devHost = process.env.API_HOST_DEV

const url = process.env.API_HOST_PROD


API.createRule = (post) => axios.post(`${url}/rules`, { data: post })
API.getRules = () => axios(`${url}/rules?populate=*`)
API.getRule = (id) => axios(`${url}/rules/${id}`)

API.getEvents = () => axios(`${url}/events?populate=*`)
API.getEvent = (id) => axios(`${url}/events/${id}?populate=*`)

API.getNews = () => axios(`${url}/news?populate=*`)
API.getNewPost = (id) => axios(`${url}/news/${id}?populate=*`)

API.getSpecialties = () => axios(`${url}/specialties?populate=*`)
API.getSpecialty = (id) => axios(`${url}/specialties/${id}?populate=*`)

API.getEmployeeRoles = () => axios(`${url}/employee-roles?populate=*`)

API.getPage = (id) => axios(`${url}/posts/${id}?populate=*`)


API.getSvedens = () => axios(`${url}/posts?filters[category][slug][$eq]=sveden&populate=*`)
API.getReceptionCampainPages = () => axios(`${url}/posts?filters[category][slug][$eq]=reception-campain&populate=*`)
API.getCommissonPage = () => axios(`${url}/reception-campain`)

API.getGraduatePages = () => axios(`${url}/posts?filters[category][slug][$eq]=graduate&populate=*`)
API.getEmploymentPage = () => axios(`${url}/employment`)
