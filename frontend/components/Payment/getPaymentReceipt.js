import axios from "axios";

export default (id, token) => axios(`/next-api/payment/atol/report/${id}?token=${token}`)