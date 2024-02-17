const isOdd = (number) => {
  return number % 2 !== 0;
};

export const isOpen = (x) => {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const hour = now.getHours();

  if (isOdd(x)) {
    if (dayOfWeek >= 1 && dayOfWeek <= 4 && hour >= 7 && hour < 17) {
      return true; // Open
    } else {
      return false; // Closed
    }
  } else {
    if (dayOfWeek >= 5 && dayOfWeek <= 6 && hour >= 7 && hour < 21) {
      return true; // Open
    } else if (dayOfWeek == 0) {
      return true; // Open
    } else {
      return false; // Closed
    }
  }
};
