const {EventEmitter} = require("events")

const { Mongo} = require("./database")
const Http = require("./http")

module.exports = class App extends EventEmitter {
  constructor() {
    super()
    this.db = {
      mongo: Mongo(this)
    }
    this.ws = null
    this.http = null

  }

  async start() {
    // start up the con to the db first
    // await this.db.redis.connect()
    await this.db.mongo.connect()
    // this postgres conenction

    // next we are ready to take in connections
    this.http = Http(this)
    this.ws = this.http.ws

    await this.http.listen(process.env.HTTP_PORT)
  }

  async stop() {
    // first we stop getting connections
    // this.gql.

    //then we shut down db connection
  }
}

