const express = require("express")
const airoutes = require("./Routes/ai.routes")
const cors = require("cors")
const app = express()
app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Helloo server!")
})

app.use("/Ai", airoutes)

module.exports = app