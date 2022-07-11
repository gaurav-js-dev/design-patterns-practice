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

- We want to define a game of chess now.We not going to program all the chess rules, but we are going to simulate a game which has two players. So a game of chess extends **Game** class. So with a template method. You extend the class in the constructor then you want to call the base class.Remember, the base class takes the number of players in the game of chess.There are two players, so we put the number two in here.We're going to say that there's going to be a maximum of ten turns and the current turn has index one,

```javascript
class Chess extends Game {
  constructor() {
    super(2);
    this.maxTurns = 10;
    this.turn = 1;
  }
}
```

- We need to override every single method of the template method containing parent class except for the template method itself. So we don't need to override run method, but we need to override everything else.
  So let's suppose that when the game starts, we're going to just output something to the console.

```javascript
class Chess extends Game {
  constructor() {
    //
  }
  start() {
    console.log(
      `Starting a game of chess with ${this.numberOfPlayers} players.`
    );
  }
}
```

- Here we feeded a predefined class as an argument that can subsequently be used as part of an algorithm.
  Here the algorithm is in the base class and you are meant to be inheriting from this base class, redefining
  every single one of these dummy methods, except, of course, for the template method itself.

- So the template method in our case is called run.This template method stays as it is, but all of the all of the methods it uses, like start have winner need to be redefined in the right class, unless of course you have no need of them, in which case you don't have to redefine them because they will just be taken from the base class and they will be help.

- You probably do want to override every method, whereas with some of the other methods like
  if there is no starting procedure for your game, then you don't have to implement start inside the
  chess game .Like below code we can comment out or remove start method because it's not strictly necessary.

```javascript
class Chess extends Game {
  constructor() {
    //
  }

  get haveWinner() {
    return this.turn === this.maxTurns;
  }

  takeTurn() {
    console.log(`Turn ${this.turn++} taken by player ${this.currentPlayer}.`);
    this.currentPlayer = (this.currentPlayer + 1) % this.numberOfPlayers;
  }

  get winningPlayer() {
    return this.currentPlayer;
  }
}

let chess = new Chess();
chess.run();
```
