import { Schema, model, models } from "mongoose";

const CarpetSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  carpet: {
    type: Array,
    required: [true, "carpet is required."],
  },
  time: { type: Date, default: Date.now },
});

const Carpet = models.Carpet || model("Carpet", CarpetSchema);

export default Carpet;
