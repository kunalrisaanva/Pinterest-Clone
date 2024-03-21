import { connect } from "mongoose";
import { DB_Name } from "../constant.js";


const DbConnection = async () => {
    try {
      const connectionInstence =  await connect(`${process.env.MONGOURI}/${DB_Name}`);
      console.log(`\n MongoDB Connected !! DB HOST : ${connectionInstence.connection.host}`);
    } catch (error) {
        console.log('Mongodb connection Failed ',error);
        process.exit(1)
    }
}

export default DbConnection
