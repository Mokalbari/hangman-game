const player = (playerName) => {
  const MAX_LIFE = 5;
  let _life = MAX_LIFE;

  return {
    getName() {
      return playerName;
    },

    getLife() {
      return _life;
    },

    decreaseLife() {
      if (_life <= 0) {
        return 0;
      }
      _life -= 1;
    },

    tryLetter(letter) {
      if (typeof letter !== "string") {
        return null;
      }
      return letter;
    },
  };
};

export default player;
