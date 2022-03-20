const myCarFactoryModule = (
    () => {
        const createdCars = [];

        function carFactory() {
            const newCar = {};

            newCar.type = arguments[0];
            newCar.color = arguments[1];
            newCar.gearType = arguments[2];
            newCar.cylinder = arguments[3];
            
            createdCars.push(newCar);
            return newCar;
        }

        return {
            //privileged method
            createCar: function(type, color, gearType, cylinder) {
                return carFactory(type, color, gearType, cylinder);
            },

            // privileged method
            getCarCount: function() {
                return createdCars.length;
            },

            // privileged method
            removeCar: function(index) {
                createdCars.splice(index, 1);
            }
        }
    }
)();


const myFirstCar = myCarFactoryModule.createCar("Sedan", "red", "automatic", 4);
const mySecondCar = myCarFactoryModule.createCar("SUV", "silver", "standard", 6);

console.log(myFirstCar.color); // red
console.log(mySecondCar.gearType); // standard

let myTotalCars = myCarFactoryModule.getCarCount();
console.log(myTotalCars); // 2

myCarFactoryModule.removeCar(0);

myTotalCars = myCarFactoryModule.getCarCount();
console.log(myTotalCars); // 1