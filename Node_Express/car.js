let altroz = {};
altroz.brandName = "TATA";
altroz.variant = "Petrol";
altroz["manufacturing"] = "2021"

console.log(altroz.manufacturing)

let swiftDezire = new Object();
swiftDezire.brandName = "Maruti";
swiftDezire.variant = "Diesel";
swiftDezire["manufacturing"] = "2019"

console.log(swiftDezire.brandName);

let tesla = {
    brandName : "TESLA",
    variant: "electric",
    manufacturing: 2018,
    start : function(){
        console.log("Engine started")
    }
}

console.log(tesla.start())