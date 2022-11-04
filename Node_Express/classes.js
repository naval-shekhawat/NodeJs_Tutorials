class Car {
    #finalPrice = "1000000"; // private
    constructor(brandName, variant, manufacturing){
        this.brandName = brandName;
        this.manufacturing = manufacturing;
        this.variant = variant;
    }

    showManufacturingDate(){
        console.log("Manufacturing date " + this.manufacturing)
    }

    stop(){

    }

    start(){

    }

    get price(){
        return this.#finalPrice
    }

    set price (p){
        if(p <1000000) { return }
        this.#finalPrice = p - (0.1 * p);
    }
}

class ElectricCar extends Car{
    constructor(brandName, manufacturing){
       super(brandName,"Electric",manufacturing)
    }
}


let kia = new PetrolCar();
console.log("Kia " + kia);

let modelY = new ElectricCar("TESLA", "2022");
for(let prop in modelY) {
    console.log(modelY[prop])
}

modelY.showManufacturingDate();



