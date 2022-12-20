const { httpServer } = require('./app')
require('dotenv').config()

const PORT = process.env.PORT || 8080

httpServer.listen(PORT, err => {
    if (err) throw err
    console.log(`>>>>> 🚀 Server started at port ${PORT}`)
})