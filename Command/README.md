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
    }
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

-So, first of all, let us define the type of action that we're going to do in an enum.

```Javascript
let Action = Object.freeze({
  deposit: 1,
  withdraw: 2,
});
```

- So let's make a class called BankAccountCommand, where we'll have to specify a couple of things.First the account you want to operate on.Then we specify the action, whether it's a deposit or a withdrawal, and finally we specify the amount and in the command, we simply store all of these.

```Javascript
class BankAccountCommand {
  constructor(account, action, amount) {
    this.account = account;
    this.action = action;
    this.amount = amount;
  }
}
```

- We have to somehow track whether a particular command actually succeeded or not in a state through this.succeeded we going to return either true or false, depending on whether it succeeded.

```Javascript

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    // Deposit code here
  }

  withdraw(amount) {
    if (this.balance - amount >= BankAccount.overdraftLimit) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}, balance is now ${this.balance}`);
      return true; // transaction succeeded
    }
    return false; // transaction failed
  }

  toString() {
  }
}
```

- So if the operation itself didn't succeed and therefore the balance never altered even after you perform the on the operation of undo.

```Javascript

  undo() {
    {
      // So if the operation or transaction did not succeed, we obviously do not try to roll it back.
      if (!this.succeeded) return;
      switch (this.action) {
        case Action.deposit:
          this.account.withdraw(this.amount);
          break;
        case Action.withdraw:
          this.account.deposit(this.amount);
          break;
      }
    }
  }
```

- So this is an illustration of how we can correctly implement undo operations with the command design pattern.
