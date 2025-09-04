import { Router } from "express";
import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";
const appRoutes = Router();
appRoutes.use("/user", userRoutes); //domain/api/v1
appRoutes.use("/chat", chatRoutes); //domain/api/v1/chat
export default appRoutes;
//# sourceMappingURL=index.js.map