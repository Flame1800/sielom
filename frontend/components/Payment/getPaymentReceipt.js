import axios from "axios";

export default (id, token) => axios(`/api/payment/atol/report/${id}?token=${token}`)