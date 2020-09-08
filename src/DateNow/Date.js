export const dateNow = () => {
  const newDate = new Date();
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let day = newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate() ;
  let month = newDate.getMonth();
  let hours = newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours();
  let minutes =newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}` : newDate.getMinutes();
  let seconds =newDate.getSeconds() < 10 ? `0${newDate.getSeconds()}` : newDate.getSeconds();

  return `${day} ${months[month]} ${hours}:${minutes}:${seconds}`;
}