//jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
res.sendFile(__dirname +"/index.html");
});

app.post("/",function(req,res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result= num1+num2;
    res.send("The results are : "+ result);
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname +"/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
    var n1 = Number(req.body.Weight);
    var n2 = Number(req.body.Height);
    var result = n1/(n2*n2);
    res.send("The BMI is : "+result);
});

app.listen(3000,function(){
 console.log("server has started.")   
});