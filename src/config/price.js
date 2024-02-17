export const price = (id) => {
  if (parseInt(id) % 4 === 0) {
    return "$";
  } else if (parseInt(id) % 3 === 0) {
    return "$$";
  } else if (parseInt(id) % 2 === 0) {
    return "$$$";
  } else {
    return "$$$$";
  }
};
