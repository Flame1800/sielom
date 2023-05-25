const axios = require("axios");
const { v4: uuidv4 } = require('uuid');

export default function handler(req, res) {
    const auth = {
        username: process.env.SNGB_LOGIN,
        password: process.env.SNGB_PASSWORD
    }

    if (req.method === 'POST') {
        const { amount, fee, payer, student, course, contract, email, domainAddress } = req.body

        let data = JSON.stringify({
            "requestId": uuidv4(),
            "nonPaymentOperation": false,
            "amount": amount,
            "fee": fee,
            "currency": "RUB",
            "locale": "en_US",
            "finishPaymentUrl": `${domainAddress}/payment/finish`,
            "notificationUrl": `${domainAddress}/next-api/payment/receive`,
            "additionalInfo": {
                "Услуга": `Образовательная услуга`,
                "Email": email,
                "Плательщик": payer,
                "Студент": student,
                "Номер курса": course,
                "Номер доумента": contract
            }
        });

        let config = {
            method: 'post',
            url: `${process.env.SNGB_API}/payment`,
            headers: {
                'X-Terminal-Id': 'EC376301',
                'Content-Type': 'application/json',
            },
            data,
            auth
        };

        axios.request(config)
            .then((response) => {
                return res.json(response.data);
            })
        .catch((error) => {
            console.log(error);
        });
    }
}
