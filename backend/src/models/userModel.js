import mongoose from "mongoose";

const { Schema } = mongoose;

// Define the User schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Create and export the User model
 const userModel = mongoose.model('User', userSchema);

 export default userModel;