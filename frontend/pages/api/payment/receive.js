export default function handler(req, res) {
    console.log("RECEIVE SNGB_API PAYMENT LOG: ", req.body)

    return res.status(200).json({
        data: req.body
    })
}