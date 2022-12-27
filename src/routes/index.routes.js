const { Router } = require('express')
const router = Router()
const config = require('../config')
const {sendMessage} = require('../twilio/send-sms')
const SMS = require('../models/sms')

router.get('/', async (req, res) => {
    const messages = await SMS.find().lean()
    messages.forEach(m => console.log(m.body))
    res.render('index', { messages })
})

router.post('/send-sms', async (req, res) => {
    const {phone, message} = req.body;

    if(!phone && !message) return res.json('Missing message or phone');

    const response = await sendMessage(phone, message)

    await SMS.create({
        body: req.body.message, 
        to: req.body.phone,
        from: config.twilio.from
    })
    
    res.redirect('/')
})

module.exports = router;