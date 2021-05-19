import { Challenge } from "../../../models/index.js";

export default async (req, res) => {
  let a = new Challenge({
    name: "Test Challenge",
    image:
      "https://www.primeum.com/hubfs/Imported_Blog_Media/challenge-commercial.jpg",
    expireDate: new Date(),
  });

  await a.save();

  return res.status(200).json({
    resultMessage: "Success",
    a,
  });
};
