import mongoose from "mongoose";
import crypto from "crypto";
import validator from "validator";
import bcrypt from "bcryptjs";
// import uuidv1 from "uuid/v1";
const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true,
        maxlength:[50, 'Name length cannot exceed 50 characters']
    },  
    email : {
        type: String,
        required: true,
        unique: true,
        trim:true,
        maxlength:[100, 'Email must be at least 100 characters'],
        // validate : validate(val){
        //     if( !validator.isEmail(val) ){
        //         throw new Error("Please enter a valid email address")
        //     }
        // }
        validate: [validator.isEmail, 'Please enter a valid email address']
        //validate(value){ if () {console.log(value)} else {console.log()}}
    },
    password:{ 
        type: String,
        required: true,
        minlength:[8, 'Password must be at least 8 characters'],
        select:false,
        // validate(val){
        //     if (val.toLowerCase().includes('password')){   //.includes returns boolean value - if there is value it returns true
        //         throw new Error( "Password cannot contain 'password' ")
        //     }
        // } 
    },
    confirmPassword:{ type: String,  required: true,
        validator: function(val){
            return val === this.password;
        },
        message: 'Password does not match'
    },
    role: { type: String, default: 'user'},
    image : {
        public_id:{
            type: String,
        },
        url:{
            type: String,
        }
    },
    createdAt: { type: Date, default: Date.now, }
});

UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 8);

    this.confirmPassword = undefined;

})

const UserModel = mongoose.model("Users", UserSchema);

export default UserModel;

//we do not want to use the synchronous version because 
//that will block the event loop and prevent other users 
//from using the application so we use asynchronous version
//async and await which will return a promise
