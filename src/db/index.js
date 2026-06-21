import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
       const connection = await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
       console.log('\n mongoDB connected !! DB HOST: ${connectionInstance.connection.host}')
    } catch (error) {
        console.error("MONGOOSE connection error:", error);
        process.exit(1);
        throw error; 
    }
}

export default connectionDB