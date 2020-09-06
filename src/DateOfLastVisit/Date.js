export const DateOfLastVisit = () => {
  const hours = new Date();
  const minutes = new Date();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  let d = new Date();
  let n = d.getDay();
  const lastDate = `${days[n]} ${hours.getHours()}:${minutes.getMinutes()}`;
  return lastDate;
}