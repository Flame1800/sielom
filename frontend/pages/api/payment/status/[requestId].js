const axios = require("axios");

export default async function handler(req, res) {
        const {requestId} = req.query
        let config = {
            method: 'GET',
            url: `https://ecm.sngb.ru/rp-test/api/v1/payment/status/by/request/${requestId}`,
            headers: {
                'X-Terminal-Id': 'EC376301',
                'Content-Type': 'application/json',
            },
            auth: {
                username: 3763,
                password: "eac9941270b3865a83df1882ba3c8179030a3e27"
            }
        };

        try {
            const result  = await axios(config)
            return res.json(result.data)
        } catch (e) {
            res.set(500).json(`Error: ${e}`)
        }
}
