function BankAccount(name,address, panCard, amount) {
    this.name = name;
    this.address = address;
    this.pan = panCard;
    this.balance = amount;
}

BankAccount.prototype.deposit = function(amountDeposited){
    this.balance += amountDeposited;
}

function withdraw(amountToWithdraw){
    console.log("this is " + this);
    this.balance = this.balance - amountToWithdraw
}

let customer1 = new BankAccount("Sharmaji", "Benaras", "XYZ", 10000);
let customer2 = new BankAccount("Mukherjee", "Kolkatta","PQR", 5000);

console.log(customer2.balance)
withdraw.call(customer2, 500);
console.log(customer2.balance)
