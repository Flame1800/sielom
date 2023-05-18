const axios = require("axios");

export default async function handler(req, res) {
    const auth = {
        username: process.env.SNGB_LOGIN,
        password: process.env.SNGB_PASSWORD
    }

        const {requestId} = req.query
        let config = {
            method: 'GET',
            url: `${process.env.SNGB_API}/payment/status/by/request/${requestId}`,
            headers: {
                'X-Terminal-Id': 'EC376301',
                'Content-Type': 'application/json',
            },
            auth
        };

        try {
            const result  = await axios(config)
            return res.json(result.data)
        } catch (e) {
            res.set(500).json(`Error: ${e}`)
        }
}
