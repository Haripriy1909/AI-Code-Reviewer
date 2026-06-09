const express = require("express")
const aiController = require("../controller/ai.controller")
const router = express.Router()


router.post("/get-res", aiController.getResponse)

module.exports = router