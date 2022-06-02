import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    username : {
        type: String,
        required: true,
    },
    age : {
        type: Number,
        required: false,
    },
    gender : {
        type: String,
        required: false,
    },
});

const UserModel = mongoose.model("Users", UserSchema);
// module.exports = UserModel;
export default UserModel;