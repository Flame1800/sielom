const axios = require("axios");
const { v4: uuidv4 } = require('uuid');

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { amount, fee, payer, student, course, contract } = req.body

        let data = JSON.stringify({
            "requestId": uuidv4(),
            "needConfirmation": true,
            "nonPaymentOperation": false,
            "amount": amount,
            "fee": fee,
            "currency": "RUB",
            "locale": "en_US",
            "finishPaymentUrl": `http://localhost:3000/payment2/finish`,
            "notificationUrl": `http://localhost:3000/api/payment/recive`,
            "additionalInfo": {
                "Услуга": "Оплата договора №503481",
                "Плательщик": payer,
                "Студент": student,
                "Номер курса": course,
                "Номер договора": contract
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
