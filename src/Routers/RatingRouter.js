const express = require("express");
const database = require("../database");
const ratingRouter = express.Router();

ratingRouter.get("/",(req,res,next)=>{

    var urlQuery = req.query.productId;
    query = "SELECT * FROM RATINGS WHERE productId = "+"'"+urlQuery+"'";

    database.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }else{
            return res.status(200).json(results);
        }
    });

});

ratingRouter.post("/addRating",(req,res,next)=>{

    let rating = req.body;
    query ="INSERT INTO RATINGS (userPhoto,username,userRating,reviewDate,reviewContent,productId) VALUES (?,?,?,?,?,?)";
    database.query(query,[rating.userPhoto,rating.username,rating.userRating,rating.reviewDate,rating.reviewContent,rating.productId],(err,result)=>{
        if(!err){
            return res.status(200).json({message : "Rating added successfully"});
        }else{
            return res.status(200).json(err);
        }
    });
});


module.exports = ratingRouter;

