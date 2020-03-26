const assert = require("chai").assert;
const Robot = require("../app");

describe("Field test for killer robot", () => {
  let robot = Robot;

  it.skip("check that robot talks string", () => {
    assert.isString(robot.talk(), "string");
  });

  it("check that robot uses allowed phrases", () => {
    let phrase = robot.talk();

    assert.oneOf(phrase, robot.phrases);
  });

  it("make sure has ammo to fire", () => {
    for (let i = 0; i < 5; i++) {
      robot.fireCannon();
      assert.isAtLeast(robot.ammo, 0);
    }
  });
});
