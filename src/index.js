import dotEnv from "dotenv"

dotEnv.config({
    path:"./env"
})

import DbConnection from "./dbConnection/dbConnection.js"
import { app } from "./app.js"


//db connections and port listening

DbConnection()
.then(()=> {
    app.listen(process.env.PORT || 9000 , () => {
        console.log(`\n ⚙️ Server is running on ${process.env.PORT || 4000} And PID ${process.pid} ⚙️`);
    })

    app.on('error', (err) => {
        // Handle uncaught exceptions or errors here
        console.error('An error occurred:', err);
      });

}).catch((error)=> {
    console.log("MONGODB CONNECTION FAILED !! :", error);
})

