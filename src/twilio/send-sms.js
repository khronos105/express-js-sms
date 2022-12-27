const config = require('../config')

const client = require('twilio')(config.twilio.accountSid, config.twilio.authToken)

/**
 * Send a message via sms
 * @param {string} phone - Phone number
 * @param {string} body - The message body
 */
async function sendMessage(phone, body){
    try{
        const message = await client.messages.create({
            to: phone,
            from: config.twilio.from,
            body
        })

        return message
    }catch(err){
        console.log(err)
    }
}

module.exports = { sendMessage }
