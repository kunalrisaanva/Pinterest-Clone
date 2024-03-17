import express from "express";

const app = express()


app.set('view engine', 'ejs');

app.get("/test",function(req,res) {
    res.render("test")
})

// routes 
import userRouter from "./routes/user.routes.js";

app.use(userRouter)


export { app }