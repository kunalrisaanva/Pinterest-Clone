import { connect } from "mongoose";
import { DB_Name } from "../constant.js";


const DbConnection = async() => {
    try {
        const connectionInstance = await connect(`mongodb://localhost:27017/${DB_Name}`);
        console.log(`\n Mongodb Connected !! DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log('Mongodb connection Failed ',error);
        process.exit(1)
    }
}

export default DbConnection
