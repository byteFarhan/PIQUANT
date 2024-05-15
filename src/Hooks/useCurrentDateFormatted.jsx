const useCurrentDateFormatted = () => {
  // Create a new Date object to get the current date
  const currentDate = new Date();

  // Define an array of month names
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  // Get the day, month, and year from the currentDate object
  const day = currentDate.getDate(); // Get the day of the month (1-31)
  const monthIndex = currentDate.getMonth(); // Get the month (0-11)
  const year = currentDate.getFullYear(); // Get the year (e.g., 2024)

  // Format the date string in the desired format
  const formattedDate = `${monthNames[monthIndex]} ${day
    .toString()
    .padStart(2, "0")}, ${year}`;

  // Return the formatted date
  return formattedDate;
};

export default useCurrentDateFormatted;
