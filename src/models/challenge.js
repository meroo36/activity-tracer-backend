import mongoose from "mongoose";
const { Schema, model } = mongoose;

const challengeSchema = new Schema(
    {
        users: [{ type: Schema.Types.ObjectId, ref: "User" }],
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        target: {
            type: Number,
        },
        expireDate: { type: Date },
    },
    {
        timestamps: true,
    }
);

const Challenge = model("Challenge", challengeSchema);
export default Challenge;
