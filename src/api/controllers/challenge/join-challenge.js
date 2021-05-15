import { Challenge } from "../../../models/index.js";
import { validateJoinChallenge } from "../../validators/challenge.validator.js";

export default async (req, res) => {
  const { error } = validateJoinChallenge(req.body);

  if (error) {
    return res.status(400).json({
      resultMessage: "Failed",
      msg: "Please enter challenge name!",
    });
  }
  const { challengeName } = req.body;
  const user = req.user._id;
  const challenge = await Challenge.findOne({
    name: challengeName,
  });
  if (challenge == null) {
    return res.status(400).json({
      resultMessage: "Failed",
      msg: "Please enter correct challenge name!",
    });
  }

  if (!challenge.users?.includes(user)) {
    challenge.users?.push(user);
    await challenge.save();
    return res.status(200).json({
      resultMessage: "Success",
      challenge,
    });
  } else {
    return res.status(400).json({
      resultMessage: "Failed",
      msg: "You already signed up for this challenge!",
    });
  }
};
