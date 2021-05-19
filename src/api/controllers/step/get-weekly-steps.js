import { Step } from "../../../models/index.js";
import moment from "moment-timezone";

function getMonday() {
  let d = new Date();
  var day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

function addDay(date, i) {
  return date.setDate(date.getDate() + i);
}

export default async function getWeeklySteps(req, res) {
  const user = req.user._id;
  const userStep = await Step.findOne({ user });
  const stepsArr = userStep.steps.sort((a, b) => a.createdAt - b.createdAt);
  let monday = getMonday();
  let weeklyListSteps = [];
  for (let i = 0; i < 7; i++) {
    let today = addDay(monday, i == 0 ? 0 : 1);
    let previousDay = addDay(new Date(monday), -1);

    let previousStartHour = moment(previousDay).startOf("day").toDate();
    let todayStartHour = moment(today).startOf("day").toDate();

    let previousEndHour = moment(previousDay).endOf("day").toDate();
    let todayEndHour = moment(today).endOf("day").toDate();

    const previousDayArr = stepsArr.filter((element) =>
      moment(element.createdAt).isBetween(previousStartHour, previousEndHour)
    );
    const todayArr = stepsArr.filter((element) =>
      moment(element.createdAt).isBetween(todayStartHour, todayEndHour)
    );

    if (previousDayArr.length > 0 && todayArr.length > 0) {
      const dailyCount =
        todayArr[todayArr.length - 1].count -
        previousDayArr[previousDayArr.length - 1].count;

      weeklyListSteps.push(dailyCount);
    }
  }
  weeklyListSteps.length = 7;
  for (let idx = 0; idx < 7; idx++) {
    if (weeklyListSteps[idx] == null) {
      weeklyListSteps[idx] = 0;
    }
  }
  return res.status(200).json({
    resultMessage: "Success",
    weeklySteps: weeklyListSteps,
  });
}
