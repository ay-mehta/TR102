class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    describe() {
        return "A circle with radius " + this.radius;
    }
}

let c1 = new Circle(3);
console.log(c1.area());
console.log(c1.describe());