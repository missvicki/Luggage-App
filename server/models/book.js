import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  destination: { type: String, required: true },
  departure: { type: String, required: true },
  name: { type: String, required: true },
  luggage: { type: Boolean, required: true }
});

export const bookedTrips = mongoose.model("BookedTrips", bookSchema);
