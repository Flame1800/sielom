import axios from "axios";

const paymentStartSession = (form) => {
    return axios.post("/next-api/payment/create", form)
}


export default  paymentStartSession