import { Step } from "../../../models/index.js";

export default async (req, res) => {
  const stepFields = {
    _id: 1,
    user: 1,
    currentStep: 1,
  };

  const leaderboard = await Step.find()
    .select(stepFields)
    .populate("user", ["fullname", "imageUrl"])
    .sort({ currentStep: -1 })
    .limit(100)
    .lean();
  return res.status(200).json({
    resultMessage: "Success",
    leaderboard,
  });
};
