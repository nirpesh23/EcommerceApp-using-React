import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    product_id   : { type : Number, required : false},
    product_name : { type : String, required : false},
}); 

const cartModel = mongoose.model("cart", cartSchema);

export default cartModel;