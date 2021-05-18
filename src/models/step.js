import mongoose from "mongoose";
const { Schema, model } = mongoose;

const stepSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  steps: [
    {
      count: Number,
      createdAt: { type: Date },
    },
  ],
  currentStep: Number,
});

const Step = model("Step", stepSchema);
export default Step;

/* 
    {
      count: 10,
      createdAt: { type: Date },
    }, 
    {
      count: 20,
      createdAt: { type: Date },
    }, 
    {
      count: 30,
      createdAt: { type: Date },
    },
*/
