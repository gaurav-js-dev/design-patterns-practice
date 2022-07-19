#### **Command** pattern is an object behavioral pattern that allows us to achieve complete decoupling between the sender and the receiver. (A sender is an object that invokes an operation, and a receiver is an object that receives the request to execute a certain operation.

- For this example consider this as banking web app scenario.For a bank account, you want to have a starting balance.In constructor have a starting balance with the default value of zero. We also want to deposit and withdraw money.So we can just go ahead and implement a couple of methods for deposit.

```Javascript
class BankAccount
{
  constructor(balance=0)
  {
    this.balance = balance;
  }

  deposit(amount)
  {
    this.balance += amount;
    console.log(
      `Deposited ${amount}, balance is now ${this.balance}`
    );
  }

  withdraw(amount)
  {
    if (this.balance - amount >= BankAccount.overdraftLimit)
    {
      this.balance -= amount;
      console.log(
        `Withdrew ${amount}, balance is now ${this.balance}`
      );
      return true;
    }
    return false;
  }

  toString()
  {
    return `Balance: ${this.balance}`;
  }
}

```
