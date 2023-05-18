import axios from "axios";

export default async function handler(req, res) {

    if (req.method === "POST") {
        const {token} = req.query

        try {
            const response =  await axios.post(`${process.env.ATOL_API}/${process.env.ATOL_GROUPCODE}/sell?token=${token}`, req.body)
            return res.json(response.data)
        } catch (error) {
            res.status(error.response.status).json(error.response.data);
        }

    }
}