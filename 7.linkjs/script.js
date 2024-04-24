// Alert
alert("Hello, world!");

// Calculate average number of weeks in human lifetime
const calculateHumanLifetime = () => {
  const averageLifespanYears = 79;
  const weeksInYear = 52;
  const averageWeeksInLifetime = averageLifespanYears * weeksInYear;
  alert(
    `Average number of weeks in a human lifetime: ${averageWeeksInLifetime}`
  );
};

// Variables to store a string
const storeString = () => {
  const firstName = "sdl";
  const lastName = "lab";
  const fullName = `${firstName} ${lastName}`;
  alert(`Full Name: ${fullName}`);
};

// Program that tells time of the day
const getTimeOfDay = () => {
  const currentHour = new Date().getHours();
  let timeOfDay;
  if (currentHour >= 5 && currentHour < 12) {
    timeOfDay = "Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Night";
  }
  alert(`Time of the day: ${timeOfDay}`);
};

// Button event listeners
document
  .getElementById("calculateHumanLifetime")
  .addEventListener("click", calculateHumanLifetime);
document.getElementById("storeString").addEventListener("click", storeString);
document.getElementById("getTimeOfDay").addEventListener("click", getTimeOfDay);
