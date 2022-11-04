function Car(name, brand, variant, price){
    this.name = name;
    this.brand = brand;
    this.variant = variant;
    this.price = price
}

Car.prototype.showPrice = function(){
    console.log(this.price);
}

function print(){
    console.log("I am " + this.name)
}

let altroz = new Car("Altroz", "Tata", "Petrol", 10);
let tiago = new Car("Tiago", "Tata", "Petrol", 9);
let eClass = new Car("Eclass", "Mercedez", "Diesel", 45);

altroz.showPrice();
print.call(altroz);