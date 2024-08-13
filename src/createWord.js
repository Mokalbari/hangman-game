const createWord = (difficulty, objectArray) => {
  return {
    getDifficulty() {
      return difficulty;
    },

    pickRandomWord() {
      const wordDifficulty = objectArray[difficulty];
      const index = Math.floor(Math.random() * wordDifficulty.length);
      return wordDifficulty[index];
    },
  };
};

export default createWord;
