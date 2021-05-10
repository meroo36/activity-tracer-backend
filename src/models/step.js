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
});

const Step = model("Step", stepSchema);
export default Step;
