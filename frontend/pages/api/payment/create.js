const axios = require("axios");
const { v4: uuidv4 } = require('uuid');

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { amount, fee, payer, student, course, contract, email, domainAddress } = req.body

        let data = JSON.stringify({
            "requestId": uuidv4(),
            "needConfirmation": true,
            "nonPaymentOperation": false,
            "amount": amount,
            "fee": fee,
            "currency": "RUB",
            "locale": "en_US",
            "finishPaymentUrl": `${domainAddress}/payment2/finish`,
            "notificationUrl": `${domainAddress}/api/payment/recive`,
            "additionalInfo": {
                service: `Образовательная услуга. Договор №${contract}`,
                email,
                payer,
                student,
                courseNumber: course,
                documentNumber: contract,
            }
        });

        let config = {
            method: 'post',
            url: 'https://ecm.sngb.ru/rp-test/api/v1/payment',
            headers: {
                'X-Terminal-Id': 'EC376301',
                'Content-Type': 'application/json',
            },
            data,
            auth: {
                username: 3763,
                password: "eac9941270b3865a83df1882ba3c8179030a3e27"
            }
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
