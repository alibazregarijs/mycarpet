export const time = () => {
  var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  var currentTime = new Date(new Date().getTime());
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var currentDay = currentTime.getDate();
  var currentMonth = currentTime.getMonth() + 1;
  var currentYear = currentTime.getFullYear();
  const today = currentDay + "/" + currentMonth + "/" + currentYear;
  const tomorrow = day + "/" + month + "/" + year;
  return { tomorrow: tomorrow, today: today };
};
