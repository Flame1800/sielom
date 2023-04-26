import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export default (token) => {

    const data = {
        "timestamp": moment().format('DD.MM.yyyy HH:mm:ss'),
        "external_id": uuidv4(),
        "ism_optional": false,
        "receipt": {
            "client": {
                "email": "mrr@sielom.ru",
                "phone": "+79322556890",
                "name": "Иванов Иван Тестовый",
            },
            "company": {
                "email": "email@ofd.ru",
                "sno": "osn",
                "inn": "5544332219",
                "payment_address": "https://sielom.ru"
            },
            "items": [
                {
                    "name": "Образовательная услуга",
                    "price": 120,
                    "quantity": 1.0,
                    "measure": 0,
                    "sum": 120,
                    "payment_method": "full_payment",
                    "payment_object": 1,
                    "vat": {
                        "type": "vat20",
                        "sum": 20.0
                    }
                }
            ],
            "payments": [
                {
                    "type": 1,
                    "sum": 120.0
                }
            ],
            "total": 120.0
        }
    }

    return axios.post(`/api/payment/atol/sell?token=${token}`, data)
}