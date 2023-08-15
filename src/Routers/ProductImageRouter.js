const express = require("express");
const database = require("../database");
const productImageRouter = express.Router();

productImageRouter.get("/",(req,res,next)=>{
    var urlQuery = req.query.productId;
    query = "SELECT * FROM PRODUCTIMAGES WHERE productId = "+"'"+urlQuery+"'";

    database.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }else{
            return res.status(200).json(results);
        }
    });
});

productImageRouter.post("/addImage",(req,res,next)=>{

    let imageModel = req.body;
    query ="INSERT INTO PRODUCTIMAGES (productId,imagePosition,imageUrl) VALUES (?,?,?)";
    database.query(query,[imageModel.productId,imageModel.imagePosition,imageModel.imageUrl],(err,result)=>{
        if(!err){
            return res.status(200).json({message : "Image added successfully"});
        }else{
            return res.status(200).json(err);
        }
    });
});

module.exports = productImageRouter;
