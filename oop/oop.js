class Checking {
    constructor(amount) {
        this.balance = amount;
        this.deposit = deposit;
        this.withdraw = withdraw;
        this.toString = toString;
    }
}


function deposit(amount) {
    this.balance += amount
}

function withdraw(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    }
    if (amount > this.balance) {
        console.log("Insufficient funds");
    }

    function toString() {
        return "Balance: " + this.balance;
    }
}

var account = new Checking(1000);

account.deposit(1000);
account.withdraw(750);
account.deposit(5000);

console.log(account.balance);



