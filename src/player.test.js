import player from "./player.js";

describe("player", () => {
  const playerName = "teo";
  let testPlayer;

  beforeEach(() => {
    testPlayer = player(playerName);
  });

  it("should return the player's name", () => {
    expect(testPlayer.getName()).toBe(playerName);
  });

  it("should return the player's total life", () => {
    expect(testPlayer.getLife()).toBe(5);
  });

  it("should decrease the player life by One", () => {
    testPlayer.decreaseLife();
    expect(testPlayer.getLife()).toBe(4);
  });

  it("should return the player's letter", () => {
    expect(testPlayer.tryLetter("m")).toBe("m");
  });

  it("should not decrease life below 0", () => {
    for (let i = 0; i < 6; i++) {
      testPlayer.decreaseLife();
    }
    expect(testPlayer.getLife()).toBe(0);
  });
});
