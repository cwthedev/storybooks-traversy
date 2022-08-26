const express = require ('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const exphbs = require('express-handlebars')
const path = require('path')
const session = require('express-session')
const passport = require('passport')
//config
dotenv.config({path: './config/config.env'})

//passport config
require('./config/passport')(passport)

connectDB();
const app = express()

 //logging
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//handlebars
const handlebars = exphbs.create({defaultLayout: 'main', extname: 'hbs',})
app.engine('.hbs', handlebars.engine)
app.set('view engine', '.hbs')

//session mid
app.use(session({
    secret: 'feefoard fat',
    resave: false,
    saveUninitialized: false,
}
))

//passport mid
app.use(passport.initialize())
app.use(passport.session())


//static folder
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running: ${process.env.NODE_ENV} on port ${PORT}`))