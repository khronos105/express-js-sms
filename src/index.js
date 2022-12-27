require('dotenv').config();

const app = require('./server')

require('./database')

app.listen('3000', () => {
    console.log('server on port ', app.get('port'))
})