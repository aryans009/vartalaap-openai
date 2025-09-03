import express from "express";
import {config} from "dotenv";
import appRoutes from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();

//middlewares
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['POST', 'GET'],
    credentials: true
}));

app.use((req, res, next) => {
    console.log('Request URL:', req.originalUrl); // Logs the URL of every request
    next();
  });

  
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//remove it in production
// app.use(morgan("dev"));
app.use("/api/v1",appRoutes);
app.use("/api/status", (req, res) => {
    res.send("API is running...");
})

if(process.env.NODE_ENV !== "production"){
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export default app;