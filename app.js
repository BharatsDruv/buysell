const express=require('express')
const app=express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressValidator=require('express-validator')

require('dotenv').config()
//import Routes
const authRoutes=require('./routes/auth');
const userRoutes=require('./routes/user');

// import mongoose
const mongoose = require('mongoose');
// load env variables
const dotenv = require('dotenv');
dotenv.config()

//db connection
mongoose.connect(
  process.env.MONGO_URI,
  {useNewUrlParser: true}
)
.then(() => console.log('DB Connected'))

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator());

mongoose.connection.on('error', err => {
  console.log(`DB connection error: ${err.message}`)
});

//routes middleware
app.use(authRoutes)
app.use(userRoutes)

const port=process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})