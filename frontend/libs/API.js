import axios from "axios";
const qs = require('qs');

export const API = {}

const prodHost = process.env.API_HOST_PROD
const devHost = process.env.API_HOST_DEV

const url = process.env.API_HOST_PROD


API.getSlides = () => axios(`${url}/hero-slides?populate=*`)

API.createRule = (post) => axios.post(`${url}/rules`, { data: post })
API.getRules = () => axios(`${url}/rules?populate=*`)
API.getRule = (id) => axios(`${url}/rules/${id}`)

API.getEvents = () => axios(`${url}/events?populate=*&sort[0]=start_date:desc`)
API.getEvent = (id) => axios(`${url}/events/${id}?populate=*`)

API.getNews = () => axios(`${url}/news?populate=*&sort[0]=date:desc`)
API.getNewPost = (id) => axios(`${url}/news/${id}?populate=*`)


const querySpecialties = qs.stringify({
    populate: [
        '*',
        'durations.duration',
    ]
}, {
    encodeValuesOnly: true,
})

API.getSpecialties = () => axios(`${url}/specialties?populate=*&filters[type][$eq]=speciality`)
API.getSpecialty = (id) => axios(`${url}/specialties/${id}?populate=*`)

API.getEmployeeRoles = () => axios(`${url}/employee-roles?populate=*`)

API.getPage = (id) => axios(`${url}/posts/${id}?populate=*`)


API.getSvedens = () => axios(`${url}/posts?filters[category][slug][$eq]=sveden&populate=*`)
API.getWordskills = () => axios(`${url}/posts?filters[category][slug][$eq]=wordskills&populate=*`)
API.getEdProcess = () => axios(`${url}/posts?filters[category][slug][$eq]=educational-process&populate=*`)

API.getReceptionCampainPages = () => axios(`${url}/posts?filters[category][slug][$eq]=reception-campain&populate=*`)
API.getCommissonPage = () => axios(`${url}/reception-campain`)

API.getGraduatePages = () => axios(`${url}/posts?filters[category][slug][$eq]=graduate&populate=*`)
API.getEmploymentPage = () => axios(`${url}/employment`)

API.getPageBySlug = slug => axios(encodeURI(`${url}/posts?populate=*&filters[slug][$eq]=${slug}`))


API.getEmployees = (category) =>
    axios(encodeURI(`${url}/employees?filters[category][name][$eq]=${category ? category : 'Руководство'}&populate=*`))
