export const monthsFull = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const monthsShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export const years = [...Array(6)].map((_, i) => 2023 + i);
export const months = [...Array(12)].map((_, i) => i);
export const dates = [...Array(31)].map((_, i) => ('0' + (i + 1)).slice(-2));
export const hours = [...Array(24)].map((_, i) => ('0' + i).slice(-2));
export const minutes = [...Array(60)].map((_, i) => ('0' + i).slice(-2));
