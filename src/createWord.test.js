import createWord from "./createWord.js";

describe("createWord", () => {
  const randomWords = {
    easy: ["flower", "adrian", "color"],
    medium: ["battleship", "navigation", "dedication"],
    hard: ["mischievous", "worcestershire", "flabbergasted"],
  };

  const testCreateWord = createWord("easy", randomWords);

  it("should return the current difficulty", () => {
    const difficulty = "easy";
    expect(testCreateWord.getDifficulty()).toBe(difficulty);
  });

  it("should return a word from the randomArray based on difficulty", () => {
    const randomWord = testCreateWord.pickRandomWord();
    expect(randomWords.easy).toContain(randomWord);
  });
});
