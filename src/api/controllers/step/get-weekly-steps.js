import { Step } from "../../../models/index.js";
import moment from "moment-timezone";

function getMonday() {
  let d = new Date();
  var day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

function setStartHour(date) {
  date.setHours(0, 0, 0, 0);
}

function setEndHour(date) {
  date.setHours(12, 59, 59, 59);
}

function addDay(date, i) {
  return date.setDate(date.getDate() + i);
}

export default async function getWeeklySteps(req, res) {
  try {
    const user = req.user._id;
    const userStep = await Step.findOne({ user });
    const stepsArr = userStep.steps.sort((a, b) => a.createdAt - b.createdAt);
    let monday = getMonday();
    let weeklyListSteps = [];

    for (let i = 0; i < stepsArr.length; i++) {
      let startHourDay = moment(monday).startOf("day").toDate();
      let endHourDay = moment(monday).endOf("day").toDate();

      if (i == 0) {
        addDay(monday, 0);
      } else {
        addDay(monday, 1);
      }
      const inThisDayArr = stepsArr.filter((element) =>
        moment(element.createdAt).isBetween(startHourDay, endHourDay)
      );

      if (!weeklyListSteps.includes(inThisDayArr[inThisDayArr.length - 1])) {
        weeklyListSteps.push(inThisDayArr[inThisDayArr.length - 1]);
      }
    }
    weeklyListSteps.length = 7;
  } catch (error) {
    console.log(error);
  }
}
