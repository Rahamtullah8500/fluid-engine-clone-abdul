import { mongoose } from 'mongoose';


const {Schema} = mongoose

const popularSchema = new Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    imgPath: { type: String, required: true }
  },
  { timestamps: true }
);

const templateModel = mongoose.model('Templates', popularSchema);

export default templateModel;
