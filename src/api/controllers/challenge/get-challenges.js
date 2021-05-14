import { Challenge } from "../../../models/index.js";

export default async (req, res) => {
    const challenges = await Challenge.find().lean();
    //console.log("challenges", challenges);
    return res.status(200).json({
        resultMessage: "Success",
        challenges,
    });
};
