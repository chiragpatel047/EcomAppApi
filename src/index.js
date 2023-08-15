const express = require("express");
const app = express();
const productRouter = require("./Routers/ProductRouter");
const productImageRouter = require("./Routers/ProductImageRouter");
const ratingRouter = require("./Routers/RatingRouter")
const database = require("./database");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/products",productRouter);
app.use("/productImages",productImageRouter);
app.use("/ratings",ratingRouter);


app.listen(5000, ()=>{
    console.log("Server started at post : 5000");
})
