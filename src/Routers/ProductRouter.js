const express = require("express");
const database = require("../database");
const productRouter = express.Router();

productRouter.get("/",(req,res,next,)=>{
    var urlQuery = req.query.category;
    var query ="";
    if(urlQuery==null){
         query = "SELECT * FROM PRODUCTS"; 
    }else{
         query = "SELECT * FROM PRODUCTS WHERE productCategory = "+"'"+urlQuery+"'"; 
    }

    console.log(urlQuery);
    database.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }else{
            return res.json(err);
        }
    });
})


productRouter.post("/addProduct",(req,res,next)=>{
    let product = req.body;
    query = "INSERT INTO PRODUCTS (productId,productTitle,productSubTitle,productDesc,productOldPrice,productPrice,productMainImage,productCategory,noOfRating,rate) VALUES(?,?,?,?,?,?,?,?,?,?)";
    database.query(query,[product.productId,product.productTitle,product.productSubTitle,product.productDesc,product.productOldPrice,product.productPrice,product.productMainImage,product.productCategory,product.noOfRating,product.rate],(err,result)=>{
        if(!err){
            return res.status(200).json({message : "Product added successfully"});
        }else{
            return res.status(500).json(err);
        }
    });
})

module.exports = productRouter;