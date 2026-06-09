const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
    apiKey: "AQ.Ab8RN6LmF1kTYoljHOmxuXzbHK5rm36A3O-9Q4BMkREvOuf-TA"
});

async function generateContent(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt
    });

    return response.text;
}
module.exports = generateContent

