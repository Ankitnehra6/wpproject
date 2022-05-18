const mongoose=require("mongoose");
const detailschema= new mongoose.Schema({

    flav:{
        type:String,
        required:true
    },

    size:{
        type:String,
        required:true
    },

    crust:{
        type:String,
        required:true
    },

    topping:{
        type:String,
        required:true
    },

    Pizzas:{
        type:Number,
        required:true
    }


})

const Register = new mongoose.model("register", detailschema);

module.exports= Register;