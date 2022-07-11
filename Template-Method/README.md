### The Template Method pattern suggests that you break down an algorithm into a series of steps, turn these steps into methods, and put a series of calls to these methods inside a single template method. The steps may either be abstract, or have some default implementation.

- We want to define a general-purpose algorithm for a board game. So in the constructor of the game based class, you can have, for example, the number of players which you can store in a field.We can also have some sort of property for the current player.This is just a number that you want to have for keeping track of the current player.

```javascript
class Game {
  constructor(numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers;
    this.currentPlayer = 0;
  }
}
```

- Now we're going to have just one method called Run and Run is going to be precisely the template method of this entire scenario.So a template method is simply a method which defines the overall structure of what needs to be done without defining the concrete parts.

- We're going to call a few of the current classes methods.We're going to say that the game starts and then while the game doesn't have a winner, we take a turn.Whichever is the current player takes a turn and then finally, when the game is over, we can just output something to the command line like this winning player wins
  So this is our run method as per below code.

```javascript
class Game {
  constructor(numberOfPlayers) {
    //
  }
  run() {
    this.start();
    while (!this.haveWinner) {
      this.takeTurn();
    }
    console.log(`Player ${this.winningPlayer} wins.`);
  }
}
```

- Probably all of these like start and take turn have to be defined and we define them as blanks so that whoever inherits from this class can actually customize them to actually do something. So here we will ll have a method called start.

- Below we have a method called start.We have a getter for winner.We also have a method called Take Turn and a getter called Winning Player.Here we've defined a template method.So we've defined effectively a structure that every single game has to follow. But we haven't defined concrete implementations of start.
  So it is up to the inheritor of this game class to actually give it some meaning.

```javascript
class Game {
  constructor(numberOfPlayers) {
    //
  }
  run() {
    //
  }
  start() {}
  get haveWinner() {}
  takeTurn() {}
  get winningPlayer() {}
}
```
