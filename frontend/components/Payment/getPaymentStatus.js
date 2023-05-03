import axios from "axios";

const getPaymentStatus = ({requestId}) => {
    return axios(`/next-api/payment/status/${requestId}`)
}


export default  getPaymentStatus