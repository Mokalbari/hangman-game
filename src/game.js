const game = (word) => {
  const _word = word.split("");
  let _hiddenWord = [];

  const _wrongGuess = [];
  const _goodGuess = [];

  const hideWord = () => {
    const token = "_";
    _hiddenWord = _word.map((letter) =>
      _goodGuess.includes(letter) ? letter : token
    );
  };

  return {
    getWord() {
      return _word.join("");
    },

    getHiddenWord() {
      hideWord();
      return _hiddenWord.join("");
    },

    getGoodGuess() {
      return _goodGuess.join("");
    },

    getWrongGuess() {
      return _wrongGuess.join("");
    },

    setGoodGuess(value) {
      _goodGuess.push(value);
    },

    setWrongGuess(value) {
      _wrongGuess.push(value);
    },
  };
};

export default game;
