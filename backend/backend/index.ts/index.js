import app from "./app.js";
import "dotenv/config";
import { connectToDatabase } from "./db/connection.js";
const PORT = process.env.PORT || 3005;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log(`${PORT} is running and connected to database`));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map