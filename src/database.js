const express = require("express");
const mysql = require("mysql");

var database = mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"",
    database:"ecomdb"
});

database.connect((err)=>{
    if(!err){
        console.log("Connected to database");
    }else{
        console.log("Error to connect to database");
    }
});

module.exports = database;