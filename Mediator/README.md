### Mediator pattern is used to reduce communication complexity between multiple objects or classes. This pattern provides a mediator class which normally handles all the communications between different classes and supports easy maintenance of the code by loose coupling.

- Let's take an example of a chat room.People can join and leave chat rooms at any time.When they send a message to the chat room, every single participant receives that message. There is also a direct message feature. We are going to implement all that. Below person is the participant of chat room.

```Javascript

class Person
{
  constructor(name) {
    this.name = name;
    this.chatLog = [];
  }
}
```

- ChatRoom class is the component that relays a message from one person to either every single other person to a particular person in the case of private messaging.

- To understand pattern and it's benefits please look at comments of below code and follow it step by step.

```Javascript

class Person
{
  constructor() {
    //
  }
  // A person can receive message from a sender
  receive(sender, message)
  {
    let s = `${sender}: '${message}'`;
    console.log(`[${this.name}'s chat session] ${s}`);
    this.chatLog.push(s);
  }
    // A person broadcasting the message
    say(message) {
    this.room.broadcast(this.name, message);
  }
    // A private message from one person to another person.
    pm(who, message){
    this.room.message(this.name, who, message);
  }
}

class ChatRoom
{
  constructor()
  {
    this.people = [];
    //People who are in chat room.
  }

  // Broadcast method but don't broadcast message to the same person who joined that chat.
  broadcast(source, message)
  {
    for (let p of this.people)
      if (p.name !== source)
        p.receive(source, message);
  }
 // When someone joins chatroom show this message with name to everyone and also add him to list of people
  join(p)
  {
    let joinMsg = `${p.name} joins the chat`;
    this.broadcast('room', joinMsg);
    p.room = this;
    this.people.push(p);
  }
 // Direct message method from one person to another
  message(source, destination, message)
  {
    for (let p of this.people)
    // only desired person receives the message
      if (p.name === destination)
        p.receive(source, message);
  }
}
```

- Let's create a new chat room.There are two users John and Jane. Maybe John and Jane both posts some things to the room.

- Later, We have another user Simon who joins the chat room and he broadcast a message and also received a private message from Jane.

```Javascript
let room = new ChatRoom();

let john = new Person("John");
let jane = new Person("Jane");

room.join(john);
room.join(jane);

john.say("hi room");
jane.say("oh, hey john");

let simon = new Person("Simon");
room.join(simon);
simon.say("hi everyone!");

jane.pm("Simon", "glad you could join us!");

//Output

// [John's chat session] room: 'Jane joins the chat'

// [Jane's chat session] John: 'hi room'

// [John's chat session] Jane: 'oh, hey john'

// [John's chat session] room: 'Simon joins the chat'

// [Jane's chat session] room: 'Simon joins the chat'

// [John's chat session] Simon: 'hi everyone!'

// [Jane's chat session] Simon: 'hi everyone!'

// [Simon's chat session] Jane: 'glad you could join us!'
```

- Takeaway from this pattern is that ChatRoom is the mediator here.The chat room is the central component that everyone has a reference to, but nobody has any direct references to one another, which means that a person is unaware of any other people being present, although when you do private messaging, you are, of course, directing it to some person's name.
