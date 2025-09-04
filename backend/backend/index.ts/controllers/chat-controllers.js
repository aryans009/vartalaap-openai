import "dotenv/config";
import User from "../models/User.js";
import OpenAI from "openai";
// Initialize the OpenAI client directly with the API key from your .env file
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
export const generateChatCompletion = async (req, res, next) => {
    const { message } = req.body;
    try {
        const user = await User.findById(res.locals.jwtData.id);
        if (!user) {
            return res
                .status(401)
                .json({ message: "User not registered or token malfunction" });
        }
        // Grab chats of user and format them for the OpenAI API
        const chats = user.chats.map(({ role, content }) => ({
            role: role,
            content,
        }));
        chats.push({ content: message, role: "user" });
        // Save the user's new message to the database
        user.chats.push({ content: message, role: "user" });
        // Get the latest response from the OpenAI API
        const chatResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: chats,
        });
        // Save the AI's response to the database
        const assistantMessage = chatResponse.choices[0]?.message;
        if (assistantMessage?.content) {
            user.chats.push(assistantMessage);
        }
        await user.save();
        return res.status(200).json({ chats: user.chats });
    }
    catch (error) {
        if (error instanceof OpenAI.APIError) {
            console.error("Error from OpenAI:", error.status, error.message);
            return res.status(error.status || 500).json({ message: error.message });
        }
        console.error("An unexpected error occurred:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
//# sourceMappingURL=chat-controllers.js.map