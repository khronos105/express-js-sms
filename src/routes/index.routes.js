const { Router } = require('express')
const router = Router()

const { indexController, postMessage } = require('../controllers/index.controller')

router.get('/', indexController)

router.post('/send-sms', postMessage)

module.exports = router;