const express = require("express");
const app = express();
const productRouter = require("./Routers/ProductRouter");
const database = require("./database");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/products",productRouter);

app.get("/test",(req,res)=>{
    res.send("Hello node js")
})

app.listen(5000, ()=>{
    console.log("Server started at post : 5000");
})
