const express = require("express")
const uuid = require("uuid")
const router = new express.Router()

router.post("/", (req, res) => {
  const {pickup, dropoff} = req.body
  // TAKES PICKUP AND DROP OFF, CREATES A POSSIBLE ROUTE TO TAKE

  // SENT HTTP REQ TO RIDE EXPERIENCE SERVICE
    // TO ENQUEUE THIS TRIP

  // RETURNS 200 AND REQUEST ID
})

router.get("/", (req, res) => {
  return res.send("hello")
})

module.exports = router