import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export default (token, data) => {
    const {additionalInfo, amount} = data

    const itemName = `${additionalInfo["Услуга"]}. Договор №${additionalInfo["Номер доумента"]}. Студент: ${additionalInfo["Студент"]}. Курс ${additionalInfo['Номер курса']} `

    const receipt = {
        "timestamp": moment().format('DD.MM.yyyy HH:mm:ss'),
        "external_id": uuidv4(),
        "receipt": {
            "client": {
                "email": additionalInfo["Email"],
                "name": additionalInfo["Плательщик"],
            },
            "company": {
                "email": "ars478999@yandex.ru",
                "sno": "osn",
                "inn": "8602269910",
                "payment_address": "https://sielom.ru"
            },
            "items": [
                {
                    "name": itemName,
                    "price": amount,
                    "quantity": 1.0,
                    "measure": 0,
                    "sum": amount,
                    "payment_method": "full_payment",
                    "vat": {
                        "type": "vat0",
                    }
                }
            ],
            "payments": [
                {
                    "type": 1,
                    "sum": amount
                }
            ],
            "total": amount
        }
    }

    return axios.post(`/next-api/payment/atol/sell?token=${token}`, receipt)
}
