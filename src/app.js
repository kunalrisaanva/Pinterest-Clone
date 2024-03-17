import express from "express";

const app = express()


app.set('view engine', 'ejs');

app.get("/test",function(req,res) {
    res.send("test")
})



app.get("/",async function(req,res) {

    res.render('index')

})






export { app }