import { Schema, model, models } from "mongoose";

const CarpetSchema = new Schema({
 

});

const Carpet = models.Carpet || model("Carpet", CarpetSchema);

export default Carpet;
