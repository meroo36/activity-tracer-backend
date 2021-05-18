import { Step } from "../../../models/index.js";

export default async (req, res) => {
  const limit = parseInt(req.params.limit);
  const stepFields = {
    _id: 1,
    user: 1,
    currentStep: 1,
  };

  const leaderboard = await Step.find()
    .select(stepFields)
    .populate("user", ["fullname", "imageUrl"])
    .sort({ currentStep: -1 })
    .limit(parseInt(limit))
    .lean();

  return res.status(200).json({
    resultMessage: "Success",
    leaderboard,
  });
};
