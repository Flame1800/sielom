import axios from "axios";

export default async function handler(req, res) {
    const authData = {
        login: process.env.ATOL_LOGIN,
        pass: process.env.ATOL_PASSWORD
    }

    const response =  await axios.post(`${process.env.ATOL_API}/getToken`, authData)
    return res.json(response.data)
}