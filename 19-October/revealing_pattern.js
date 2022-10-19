function Account(){
    let balance = 1000;

    function withdraw(amountToWithdraw) {
        balance =  balance - amountToWithdraw
    }
    function deposit(amountToDeposit) {
        balance =  balance + amountToDeposit
    }
    function getBalance() {
        return balance;
    }
    return {
        withdraw : withdraw,
        deposit: deposit,
        getBalance: getBalance
    }
}

let acc = Account();
console.log(acc.balance);
console.log(acc.getBalance());