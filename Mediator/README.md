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
