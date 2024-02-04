export const shuffleArray = (array) => {
  let copy = [...array]; // Create a copy of the array
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy; // Return the shuffled copy
};
