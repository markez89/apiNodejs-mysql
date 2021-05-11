const express = require('express');
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes');

const app = express();

app.set('port', process.env.PORT || 4000)

const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'library'
}


//Middlewares---------------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

//Routes--------------------------------------------------
app.use('/api', routes)


//Server running------------------------------------------
app.listen(app.get('port'), () => {
    console.log('Server runing on port', app.get('port'))
})