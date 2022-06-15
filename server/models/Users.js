import mongoose from "mongoose";
import crypto from "crypto";
// import validator from "validator";
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
        // validate(val){
        //     if( !validator.isEmail(val) ){
        //         throw new Error("Please enter a valid email address")
        //     }
        // }
        // validate: [validator.isEmail, 'Please enter a valid email address']
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
    confirmPassword:{
        type: String,
        required: false,
        // validate(val){
        //     if (val !== this.password){
        //         throw new Error('Password does not match')
        //     }
        // }
    },
    role:{
        type: String,
        default: 'user',
    },
    
    image : {
        public_id:{
            type: String,
        },
        url:{
            type: String,
        }
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

UserSchema.pre('save', function(next) {
    const user = this
    console.log('User saving...')
    next()
})

const UserModel = mongoose.model("Users", UserSchema);

export default UserModel;