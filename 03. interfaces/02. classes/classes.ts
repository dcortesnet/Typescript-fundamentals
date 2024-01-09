interface Vehicle {
    speedUp(): void;
    curb(): void;
}

class Car implements Vehicle {
    speedUp(): void {
        console.log("Acelerando el coche");
    }

    curb(): void {
        console.log("Frenando el coche");
    }
}

let myCar: Vehicle = new Car();
myCar.speedUp();
myCar.curb();