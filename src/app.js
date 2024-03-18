import express from "express";
import path from "path"
import cookieParser from "cookie-parser";
import logger from "morgan"
import expressSession from "express-session"
import passport from "passport";
import { initializePassport } from "./middleware/passport.midleware.js";
import userRouter from "./routes/renderPage.routes.js";


const app = express()


initializePassport(passport)

// app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.use(expressSession({
    secret:"kunalismyName",
    resave: false,
    saveUninitialized: true,
}))


app.use(passport.initialize())

app.use(passport.session())


app.set('view engine', 'ejs');

// routes 

app.use(userRouter)


export { app }