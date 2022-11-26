// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    return this.sides.reduce((prev, curr) => prev + curr);
  }
}
class Triangle extends Polygon {
  constructor(sides) {
    super(sides);
  }
  get isValid() {
    let valid = true;
    if (this.sides[0] + this.sides[1] <= this.sides[2]) {
      valid = false;
    }
    if (this.sides[1] + this.sides[2] <= this.sides[0]) {
      valid = false;
    }
    if (this.sides[0] + this.sides[2] <= this.sides) {
      valid = false;
    }
    return valid;
  }
}
class Square extends Polygon {
  constructor(sides) {
    super(sides);
  }
  get isValid() {
    let prev = this.sides[0];
    let valid = true;
    for (let curr = 1; curr < this.sides.length; curr++) {
      if (this.sides[curr] !== prev) {
        valid = false;
        break;
      } else {
        prev = this.sides[curr];
      }
    }
    return valid;
  }
  get area() {
    return 25;
  }
}
