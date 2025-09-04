import { connect, disconnect } from 'mongoose';
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log("error");
        throw new Error("Cant connect to mondodb");
    }
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log("error");
        throw new Error("Cant disconnect to mondodb");
    }
}
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map