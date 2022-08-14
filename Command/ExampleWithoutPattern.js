class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}, balance is now ${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance - amount >= BankAccount.overdraftLimit) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}, balance is now ${this.balance}`);
      return true;
    }
    return false;
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

BankAccount.overdraftLimit = -500;

let ba = new BankAccount(100);
ba.deposit(100);
console.log(ba.toString());
