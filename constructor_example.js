function Car(brandName, variant, manufacturing){
    this.brandName = brandName;
    this.variant = variant;
    this.manufacturing = manufacturing;
}

let altroz = new Car("TATA", "Petrol", "2021");
let swiftDezire = new Car("Maruti", "Diesel" , "2019")

printAllCarDetails(altroz);
printAllCarDetails(swiftDezire);

function printAllCarDetails(obj){
    for(let prop in obj){
        console.log(obj[prop]);
    }
}
