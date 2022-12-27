const { Router } = require('express')
const router = Router()
const {sendMessage} = require('../twilio/send-sms')

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/send-sms', async (req, res) => {
    const response = await sendMessage(req.body.phone, req.body.message)
    console.log(response.sid)
    res.send('received')
})

module.exports = router;