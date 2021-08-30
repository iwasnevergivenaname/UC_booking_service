// const IORedis = require("ioredis")
//
// // const url = "localhost"
//
// class Redis {
//   constructor() {
//     this.connection = new IORedis()
//   }
//
//   getConnection() {
//     const conn = this.connection
//     return {
//       get(...args) {
//         return conn.get(...args)
//       },
//       set(...args) {
//         return conn.set(...args)
//       }
//     }
//   }
//
//   async connect() {
//   }
//
//   async close() {
//   }
//
//   get(...args) {
//     return this.connection.get(...args)
//   }
//
//   set(...args) {
//     return this.connection.set(...args)
//   }
// }
//
//
// module.exports = function (app) {
//   return new Redis()
// }
//
