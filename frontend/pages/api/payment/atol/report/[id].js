import axios from "axios";

export default async function handler(req, res) {
        const {id, token} = req.query

        try {
            const response =  await axios(`${process.env.ATOL_API}/${process.env.ATOL_GROUPCODE}/report/${id}?token=${token}`)
            return res.json(response.data)
        } catch (error) {
            res.json({ error: error.message });
        }
}