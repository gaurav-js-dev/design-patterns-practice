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

- We can start operating on the bank account by running this code below and everything just works fine.

```Javascript
BankAccount.overdraftLimit = -500;

let ba = new BankAccount(100);
ba.deposit(100);
console.log(ba.toString());

// Output for console is below ->

// Deposited $100 balance is now $200
// Balance: $200
```

- One of the problems that the **Command pattern** is trying to solve is being able to record the fact that this change took place that somebody deposited $100 so we can audit that information also we can revert or roll back this deposit later on.This is what we're going to implement.
