require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/indexRouter')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

// const config = require('dotenv')
// const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandler)

// app.use(express.json({extended: true}))
// app.use('/api/home', require('./routes/home.routes'))
// app.use('/api/auth', require('./routes/auth.routes'))


const start = async () => {
    try {
      await sequelize.authenticate()
      await sequelize.sync()
      // await mongoose.connect(config.get('mongoUri'), {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   useCreateIndex: true
      // })
      app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
      // console.log('Server Error', e.message)
      // process.exit(1)
      console.log(e);
    }
  }
  
  start()