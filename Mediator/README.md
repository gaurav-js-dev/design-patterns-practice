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

```Javascript


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
 // When someone joins chatroom show this message with name to everyone
  join(p)
  {
    let joinMsg = `${p.name} joins the chat`;
    this.broadcast('room', joinMsg);
    p.room = this;
    this.people.push(p);
  }

  message(source, destination, message)
  {
    for (let p of this.people)
      if (p.name === destination)
        p.receive(source, message);
  }
}
```
