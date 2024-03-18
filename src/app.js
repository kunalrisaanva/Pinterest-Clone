import express from "express";
import path from "path"
import cookieParser from "cookie-parser";
import logger from "morgan"
import expressSession from "express-session"
import passport from "passport";
import { initializePassport } from "./middleware/passport.midleware.js";


const app = express()


initializePassport(passport);

app.set('view engine', 'ejs');

app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:"kunalnameismy"
}))


app.use(passport.initialize())
app.use(passport.session())
// app.use()

// app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname,"public")))


// routes 
import userRouter from "./routes/renderPage.routes.js";

app.use(userRouter)


export { app }