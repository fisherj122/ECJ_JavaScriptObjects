function createCar(y,ma,mo,c) {
  var speed = 0;
  var maxSpeed = 85;
  var accel = 10;
  var decel = 7;
  var randDecel = 0;
  return {
    //speed: 0,
    year: y,
    make: ma,
    model: mo,
    color: c,
    returnString: function() {
      return "Your car is a: " + this.color + " " + this.year + " " + this.make + " " + this.model;
    },
    getSpeed: function() {
      //return "Your speed is: " + speed
      return speed;
    },
    accelerate: function() {
      if (speed < maxSpeed && speed > (maxSpeed-accel)) {
        speed = maxSpeed;
      }
      else {
        speed+=accel;
      }
    },
    brake: function() {
      if (speed < decel && speed > 0) {
        speed = 0;
      }
      else {
        speed-=decel;
      }
    },
    upDown: function() {
      console.log("Start acceleration");
      for (speed = 0; speed < 50; this.accelerate()) {
        console.log(this.getSpeed());
      }
      console.log(this.getSpeed());
      console.log("End acceleration; begin deceleration");
      for(speed = this.getSpeed(); speed > 0;this.brake()) {
        console.log(this.getSpeed());
      }
      console.log(this.getSpeed());
      console.log("End deceleration");
    },
    randomBrake: function() {
      randDecel = Math.floor(Math.random()*(1+(speed/2)));
      speed = randDecel;
    },
    randBrakeLog: function() {
      speed = 50;
      console.log("Starting speed: 50");
      while (speed > 0) {
        this.randomBrake();
        console.log(this.getSpeed());
      }
      console.log("Final speed:" +this.getSpeed());
    }
  }
}

function runAccelDecel() {
  var car = createCar(2011,"Honda","CR-V","Blue");
  car.upDown();
}

function runRandomBrake() {
  var car = createCar(2011,"Honda","CR-V","Blue");
  car.randBrakeLog();
}
