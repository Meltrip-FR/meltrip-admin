import { DateTime } from "luxon";

export const convertDate = (date: any) => {
  if (date) {
    const dateArray = date.split("-");
    const val = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
    const [day, month, year] = val.split("/").map((n: string) => parseInt(n));
    return DateTime.fromObject({ day, month, year }).toSeconds();
  }
};

export const countMonthDate = (end: any, start: any) => {
  const d1 = DateTime.fromSeconds(start);
  const d2 = DateTime.fromSeconds(end);
  const diff = d2.diff(d1, "months");
  return Math.round(diff.months);
};

export const daysInThisMonth = (): number => {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
};

export const convertToTimestamp = (value: any) => {
  const convertEnd: any = DateTime.fromISO(value).plus({ days: 1 });
  const dateTimestamp = convertEnd.valueOf() / 1000;
  return dateTimestamp;
};
