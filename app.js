var express =require("express");
var app= express();
var path= require("path");

app.use(express.static(path.join(__dirname,"public")));
app.get("/",function(req, res){
res 

    .status(200)
    .sendFile(path.join(__dirname,"public","index.html"));


});

// app.set('public','./public')
// app.set('view engine', 'hbs')
// app.get("/ab",(req,res)=>{
//     res.render( 'about')
// })

let mongoose= require("mongoose")
mongoose.connect('mongodb://localhost:27017/nodejsdb')
.then(()=>{
    console.log("database connected ....")
}).catch((err)=>{
    console.log(err)
})

let myschema= new mongoose.Schema({
    Name:{type:String, required:true},
    Email:{type:String, required:true},
    message:{type:String, required:true},
    subject:{type:String, required:true},
    contact:{type:Number, required:true},

})

let customer= new mongoose.model("customer",myschema)

let createDocs= async()=>{
  let s1= new customer({
      Name:"Ankit",
      Email:"nehra2042@gmail.com",
      message:"good quality of pizza",
      subject:"pizaa",
      contact:"8569827060"
      
  })
  let s2= new customer({
    Name:"Harshul",
    Email:"rana05@gmail.com",
    message:" took much time to prepare food",
    subject:"complain",
    contact:"9467983300"
    
})

let s3= new customer({
    Name:"sarthak",
    Email:"sarthak12@gmail.com",
    message:" bad home delivery",
    subject:"complain",
    contact:"9466346047"
    
})



let res= await customer.insertMany([s1,s2,s3])
console.log(res)

}
createDocs()

let getData=async()=>{
    let res = await customer.find()
    console.log(res)
}

getData()

 let Register = require('./modu') 
 let createDoc= async()=>{
     let s1= new Register({
         flav:"Tuna fish",
         size:"medium",
          crust:"Thin",
         topping:"onion",
         Pizzas:"8"
        
     })

     let s2= new Register({
         flav:" Margherita",
         size:"Large",
          crust:"Thin",
         topping:"Extra chesse",
         Pizzas:"10"
        
     })

     let s3= new Register({
         flav:" Greek pizza",
         size:"small",
          crust:"Thick",
         topping:"Tomato",
         Pizzas:"3"
        
     })
 
    
  
  let res= await Register.insertMany([s1,s2,s3])
   console.log(res)
  
   }
  createDoc()


// var bodyParser=require("body-parser");
  
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/gfg');
// var db=mongoose.connection;
// db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function(callback){
//     console.log("connection succeeded");
// })

// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// app.post('/sign_up', function(req,res){
//     var name = req.body.name;
//     var email =req.body.email;
//     var subject = req.body.subject;
//     var message =req.body.phone;
  
//     var data = {
//         "name": name,
//         "email":email,
//         "subject":subject,
//         "message":message
//     }
//     db.collection('details').insertOne(data,function(err, collection){
//         if (err) throw err;
//         console.log("Record inserted Successfully");
              
//     });
          
//     return res.redirect('signup_success.html');
// })
  
  
// app.get('/',function(req,res){
// res.set({
//     'Access-control-Allow-Origin': '*'
//     });
// return res.redirect('index.html');})

app.listen(3000,function(){
    console.log("we are listening");
})