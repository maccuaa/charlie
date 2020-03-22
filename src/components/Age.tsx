import * as React from "react";

import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  subYears,
  subMonths,
} from "date-fns";

const CHARLIE_BIRTHDAY = new Date(2019, 4, 19);

const datediff = (from: Date, to: Date) => {
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

  const days = differenceInDays(to, from);

  if (days > 0) {
    result.push(`${days} day${days > 1 ? "s" : ""}`);
  }

  return result.join(" "); //1 years 4 months 13 days
};

const isCharliesBirthday = () => {
  const today = new Date();

  const isSameMonth = today.getMonth() === CHARLIE_BIRTHDAY.getMonth();
  const isSameDay = today.getDate() === CHARLIE_BIRTHDAY.getDate();

  return isSameDay && isSameMonth;
};

const Age = () => {
  const TODAY = new Date();

  const diff = datediff(CHARLIE_BIRTHDAY, TODAY);

  const charliesBirthday = isCharliesBirthday();

  return (
    <>
      {charliesBirthday && (
        <>
          <h1>It's Charlie's birthday! </h1>
          <h1>🎉 🥳 🎁</h1>
        </>
      )}
      <h2>{`Charlie is ${diff} old`}</h2>
    </>
  );
};

export default Age;
