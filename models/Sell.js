import { Schema, model, models } from "mongoose";

const SellSchema = new Schema({
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
    required: [true, "price is required!"],
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
    required: [true, "quantity is required!"],
  },
  meter: {
    type: Number,
    enum: [6, 9, 12],
    default: 6,
  },
  time: { type: Date, default: Date.now },
});

const Sell = models.Sell || model("Sell", SellSchema);

export default Sell;
