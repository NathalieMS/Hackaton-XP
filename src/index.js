const express = require('express')
const app = express()
const { checkingAccount } = require('./controller/controller') ;
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.get('/checking-account', checkingAccount);

app.listen(3000)