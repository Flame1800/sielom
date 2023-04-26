import axios from "axios";

const getPaymentStatus = ({requestId}) => {
    return axios(`/api/payment/status/${requestId}`)
}


export default  getPaymentStatus