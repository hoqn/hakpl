export function convertDateTo8digits(date: Date) {
  return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, "0")}${date
    .getDate()
    .toString()
    .padStart(2, "0")}`;
}

export function convert8digitsToDate(dateString: string) {
  const year = parseInt(dateString.substring(0, 4));
  const monthIndex = parseInt(dateString.substring(4, 6)) - 1;
  const date = parseInt(dateString.substring(6, 8));

  return new Date(year, monthIndex, date);
}
