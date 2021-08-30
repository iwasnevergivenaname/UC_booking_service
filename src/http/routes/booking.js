const express = require("express")
const {v4: uuidv4} = require("uuid")
const axios = require("axios")

const router = new express.Router()

const tripServiceUrl = process.env.TRIP_SERVICE_URL

router.post("/", async (req, res) => {
  const {pickup, dropoff, tripId, userId} = req.body

  // api call to set pickup and dropoff

  try {
    const {data} = await axios.post(`http://${tripServiceUrl}/trip/${tripId}`, {userId, pickup, dropoff})
    res.send({tripId: tripId, ...data})
  }
  catch (error) {
    console.log(error)
    res.send({error: error})
  }

})


module.exports = router