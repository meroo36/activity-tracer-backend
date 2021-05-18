import { Step } from "../../../models/index.js";
import { validateStep } from "../../validators/step.validator.js";

export default async function sendSteps(req, res) {
  const { error } = validateStep(req.body);
  console.log(req.body);
  console.log(error);

  if (error) {
    return res.status(400).json({
      resultMessage: "Failed",
      msg: "Please enter count",
    });
  }

  const user = req.user._id;
  const { count, date } = req.body;
  const steps = await Step.findOne({ user: user });

  if (!steps) {
    const newStep = await new Step({
      user,
      steps: { count, createdAt: date },
      currentStep: count,
    });
    await newStep.save();
    return res.status(200).json({
      resultMessage: "Success",
      msg: "Saved",
      newStep,
    });
  } else {
    const stepCount = { count: count, createdAt: date };
    const newStep = await Step.findOneAndUpdate(
      { user: user },
      {
        $push: {
          steps: stepCount,
        },
        $set: {
          currentStep: count,
        },
      },
      { new: true }
    );

    return res.status(200).json({
      resultMessage: "Success",
      msg: "Saved",
      newStep,
    });
  }
}
