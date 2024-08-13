import game from "./game.js";

describe("game", () => {
  const wordToGuess = "adrian";
  const testGame = game(wordToGuess);

  it("should return the correct word", () => {
    expect(testGame.getWord()).toBe(wordToGuess);
  });

  it("should completely hide the correct word when no letter is discovered", () => {
    expect(testGame.getHiddenWord()).toBe("______");
  });

  it("should reveal the correct letter when a player makes a good guess", () => {
    testGame.setGoodGuess("d");
    expect(testGame.getHiddenWord()).toBe("_d____");
  });

  it("should keep track of all discarded guess", () => {
    testGame.setWrongGuess("f");
    expect(testGame.getWrongGuess()).toBe("f");
  });

  it("should reveal all good guess at once", () => {
    testGame.setGoodGuess("a");
    expect(testGame.getHiddenWord()).toBe("ad__a_");
  });
});
