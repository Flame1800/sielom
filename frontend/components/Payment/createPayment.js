import axios from "axios";

const paymentStartSession = (form) => {
    return axios.post("/api/payment/create", form)
}


export default  paymentStartSession