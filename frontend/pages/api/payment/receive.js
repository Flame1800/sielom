export default function handler(req, res) {
    console.log("-----------------------Notification: ", req.body)

    return res.status(200).json({
        data: req.body
    })
}