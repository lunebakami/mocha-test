var Robot = function() {
  this.speed = 0;
  this.maxSpeed = 50;
  this.ammo = 200;
  this.phrases = [
    "Kill all humans!",
    "Exterminate!",
    "I'm here to help.",
    "I took your job!"
  ];
};
Robot.prototype.talk = function() {
  //returns a string
  let phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
  console.log("Robot says:", phrase);
  return phrase;
};
Robot.prototype.fireCannon = function() {
  //returns a number from 0 - 9
  if (this.ammo >= 50) {
    console.log("pew pew pew. 50 shots fired.");
    this.ammo -= 50;
  } else if (this.ammo == 0) {
    console.log("No ammo left");
  } else {
    let num = this.ammo;
    console.log("pew pew. ", num, "shots fired.");
    this.ammo -= num;
  }
  return this.ammo;
};
Robot.prototype.accelerate = function() {
  //console.log("Robot says:", 'Vroom vroom');
  speed *= 1.2;
  return this.speed;
};
Robot.prototype.decelerate = function() {
  //console.log("Robot says:", 'Screeeeeech!');
  speed *= 0.75;
  return this.speed;
};

let robot = new Robot();
//robot.talk();

module.exports = robot;
