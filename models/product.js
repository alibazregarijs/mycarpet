import { Schema, model, models } from "mongoose";

const Product = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: [true, "Username is required!"],
  },

  price: {
    type: Number,
    required: [true, "Username is required!"],
  },
  description: {
    type: String,
  },
  quantity:{
    type:Number
  },
  meter:{
    type:Number,
    enum : [6,9,12],
    default: 6
  }
});
