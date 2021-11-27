import axios from "axios";

export const API = {}
const url = 'http://localhost:1337'

API.createRule = (post) => axios.post(`${url}/rules`, post)
API.getRules = () => axios(`${url}/rules`)
API.getRule = (id) => axios(`${url}/rules/${id}`)

API.getEmployeeRoles = () => axios(`${url}/employee-roles`)