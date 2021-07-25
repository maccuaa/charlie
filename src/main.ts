import {
  differenceInYears,
  differenceInMonths,
  subYears,
  subMonths,
} from "date-fns";

import './style.css'


const CHARLIE_BIRTHDAY = new Date(2019, 4, 19);

const calculateHumanAge = (from: Date, to: Date) => {
  const result = [];

  const years = differenceInYears(to, from);

  if (years > 0) {
    result.push(`${years} year${years > 1 ? "s" : ""}`);
    to = subYears(to, years);
  }

  const months = differenceInMonths(to, from);

  if (months > 0) {
    result.push(`${months} month${months > 1 ? "s" : ""}`);
    to = subMonths(to, months);
  }

  return result.join(" "); //1 years 4 months
};

const calculateDogAge = (from: Date, to: Date) => {
  const years = differenceInYears(to, from);

  const age = 16 * Math.log(years) + 31;

  console.log(age);

  return Math.round(age);
};

const isCharliesBirthday = () => {
  const today = new Date();

  const isSameMonth = today.getMonth() === CHARLIE_BIRTHDAY.getMonth();
  const isSameDay = today.getDate() === CHARLIE_BIRTHDAY.getDate();

  return isSameDay && isSameMonth;
};

const main = () => {
  const TODAY = new Date();

  const humanAge = calculateHumanAge(CHARLIE_BIRTHDAY, TODAY);
  const dogAge = calculateDogAge(CHARLIE_BIRTHDAY, TODAY);

  const itsCharliesBirthday = isCharliesBirthday();

  const dogAgeElement = document.getElementById("dog-age");
  const humanAgeElement = document.getElementById("human-age");

  if (!dogAgeElement) {
    console.error("unable to find dog-age element");
    return;
  }

  if (!humanAgeElement) {
    console.error("unable to find human-age element");
    return;
  }

  humanAgeElement.textContent = `Charlie is ${humanAge} old`;
  dogAgeElement.textContent = `That's ${dogAge} in dog years!`;

  if (itsCharliesBirthday) {
    const surpriseElement = document.getElementById("surprise");

    if (!surpriseElement) {
      console.log("unable to find surprise element");
      return;
    }

    surpriseElement.classList.remove("hidden");
  }
}

main();