require('dotenv').config({ path: '../.env' })
const express = require("express")
const { v4: uuidv4 } = require('uuid')
const axios = require("axios")

const router = new express.Router()

const rideExperienceEndpoint = `${process.env.NODE_RIDE_EXPERIENCE_SERVICE_ENDPOINT}`


router.post("/", async (req, res) => {
  const {pickup, dropoff} = req.body
  const reqId = uuidv4()
  // TAKES PICKUP AND DROP OFF, CREATES A POSSIBLE ROUTE TO TAKE

  // SENT HTTP REQ TO RIDE EXPERIENCE SERVICE
    // TO ENQUEUE THIS TRIP
  try {
    const rideRes = await axios.post(rideExperienceEndpoint, {reqId: reqId})
  // RETURNS 200 AND REQUEST ID
    return res.json({code: 200, reqId: reqId})
  } catch (e) {
    console.log(e)
  }

})

router.get("/", (req, res) => {
  return res.send("hello")
})

module.exports = router