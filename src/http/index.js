const express = require("express")
// const expWs = require("express-ws")
const bookingRouter = require("./routes/booking")


module.exports = function () {
  const server = express()
  server.use(express.json())
  server.use("/booking", bookingRouter)


  return {
    server,
    async listen(port) {
      return new Promise((resolve) => {
        server.listen(port, () => {
          console.log(`${process.env.APP_NAME} HTTP running on ${port}`)
          resolve()
        })
      })
    },
    async stop() {

    }
  }
}