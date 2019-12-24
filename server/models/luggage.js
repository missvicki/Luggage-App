import mongoose from "mongoose";

const luggageSchema = mongoose.Schema({
  type: { type: String, required: true },
  size: { type: String, required: true },
  owner: { type: String },
  color: { type: String, required: true }
});

export const Luggage = mongoose.model("Luggage", luggageSchema);
