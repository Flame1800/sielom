import axios from "axios";

export default async function handler(req, res) {
        const groupId = 'v5-online-atol-ru_5179'
        const {id, token} = req.query

        try {
            const response =  await axios(`https://testonline.atol.ru/possystem/v5/${groupId}/report/${id}?token=${token}`)
            return res.json(response.data)
        } catch (error) {
            res.json({ error: error.message });
        }
}