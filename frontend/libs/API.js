import axios from "axios";

export const API = {}

const prodHost = process.env.API_HOST_PROD
const devHost = process.env.API_HOST_DEV

const url = process.env.NODE_ENV === 'production' ? prodHost : devHost

API.createRule = (post) => axios.post(`${url}/rules`, post)
API.getRules = () => axios(`${url}/rules`)
API.getRule = (id) => axios(`${url}/rules/${id}`)

API.getEmployeeRoles = () => axios(`${url}/employee-roles`)