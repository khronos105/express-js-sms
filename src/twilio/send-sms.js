const config = require('../config')

const client = require('twilio')('AC9c5185fd3e1f6606f06e6b665095073a', 'c15a357da59d71cf8ec20d5ba01d1fe6')

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

module.exports = {sendMessage}
