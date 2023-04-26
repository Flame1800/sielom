import axios from "axios";

export default async function handler(req, res) {
    const authData = {
        login: "v5-online-atol-ru",
        pass: "zUr0OxfI"
    }

    const response =  await axios.post(`https://testonline.atol.ru/possystem/v5/getToken`, authData)
    return res.json(response.data)
}