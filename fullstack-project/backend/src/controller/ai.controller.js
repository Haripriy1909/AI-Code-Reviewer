const aiservice = require("../service/ai.service")

module.exports.getResponse = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required")
    }

    const response = await aiservice(code)
    
    res.send(response)
}