function Car(brandName, variant, manufacturing){
    this.brandName = brandName;
    this.variant = variant;
    this.manufacturing = manufacturing;
}

Car.prototype.showCarDetails = function (){
    console.log(this.brandName + " has " + this.variant)
}

function showManufacturingDate(){
    console.log("The car was manufactured in year "
                 + this["manufacturing"])
}

// this => current context
let altroz = new Car("TATA", "Petrol", "2021");
let swiftDezire = new Car("Maruti", "Diesel" , "2019")
altroz.showCarDetails();
showManufacturingDate.call(swiftDezire);