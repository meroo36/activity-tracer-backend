import mongoose from "mongoose";
const { Schema, model } = mongoose;

const challengeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        expireDate: { type: Date },
    },
    {
        timestamps: true,
    }
);

const Challenge = model("Challenge", challengeSchema);
export default Challenge;
