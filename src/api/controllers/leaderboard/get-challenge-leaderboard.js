import { Step, Challenge } from "../../../models/index.js";

export default async (req, res) => {
  const challengeName = req.params.challengeName;
  const limit = req.params.limit;

  const challenge = await Challenge.findOne({ name: challengeName });

  const usersOfChallenge = challenge.users;

  const stepFields = {
    _id: 1,
    user: 1,
    currentStep: 1,
  };

  const leaderboard = await Step.find({ user: { $in: usersOfChallenge } })
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
