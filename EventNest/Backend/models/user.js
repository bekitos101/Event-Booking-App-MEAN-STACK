const mongoose=require('mongoose');


const UserSchema = new mongoose.Schema({
        // Username:{ type: String, required: true, unique: true },
        // email: { type: String, required: true, unique: true },
        // password: { type: String, required: true }

        Username:String,
        email: String, 
        password: String


});

const User = mongoose.model('User', UserSchema);

module.exports = User;



