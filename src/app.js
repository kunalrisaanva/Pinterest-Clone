import express from "express";

const app = express()


app.set('view engine', 'ejs');

app.use(express.static("public"))


app.get("/test",function(req,res) {
    res.send("test")
})


// routes 
import userRouter from "./routes/renderPage.routes.js";

app.use(userRouter)


export { app }