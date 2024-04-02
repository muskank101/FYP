import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

/// function bnake usko exxport kr rhe h 
//async becoz db is  in other continent
const connectDB = async()=>{
    try{
        //mongoose actually returns us an object which can be stored in a var 
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MONGODB connection Failed",error);
        process.exit(1);
    }
}

export default connectDB