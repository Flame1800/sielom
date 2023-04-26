import axios from "axios";

export default async function handler(req, res) {

    if (req.method === "POST") {
        const groupId = 'v5-online-atol-ru_5179'
        const {token} = req.query

        try {
            const response =  await axios.post(`https://testonline.atol.ru/possystem/v5/${groupId}/sell?token=${token}`, req.body)
            return res.json(response.data)
        } catch (error) {
            res.status(error.response.status).json(error.response.data);
        }

    }
}