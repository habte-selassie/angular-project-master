const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
dotenv.config()
const  compress = require('compression')
const  cors = require('cors')
const  helmet = require('helmet')
const userRoutes = require('./routes/user')
const teacherRoutes = require('./routes/teachers')
const app = express()

const port = process.env.PORT || 8000 ;

///////////// 3 rd party middleware

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

////////// functional middlewares
app.use('/',userRoutes)

app.use('/',teacherRoutes)
// const db = process.env.MONGODB_URL

const uri = 'mongodb+srv://habtuchelsea1000:habtuy6869@cluster0.geqfvgt.mongodb.net/Coding?retryWrites=true&w=majority'

//`mongodb+srv://habtuchelsea1000:habtuy6869@cluster0.teuj5et.mongodb.net/Database?retryWrites=true&w=majority`

mongoose.connect(uri,{});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error(error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/',(req,res)=>{
  res.status(200).send('hi')
})

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
  res.status(401).json({"error" : err.name + ": " + err.message})
  }else if (err) {
  res.status(400).json({"error" : err.name + ": " + err.message})
  console.log(err)
  }
  })

app.listen(port,()=>{
    console.log(`Server Started on port ${port}`);
})

module.exports =  app