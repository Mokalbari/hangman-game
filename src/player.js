const player = (playerName) => {
  const MAX_LIFE = 5;
  let _life = MAX_LIFE;

  return {
    getLife() {
      return _life;
    },

    decreaseLife() {
      _life -= 1;
    },

    tryLetter(letter) {
      return letter;
    },
  };
};

export default player;
