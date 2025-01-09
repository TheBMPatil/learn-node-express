import { EventEmitter } from "events";
const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("Hello bhai " + name);
}

function goodbyeHandler(name) {
  console.log("Goodebye  bhai " + name);
}

//Register evnet listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

//Emit Events
myEmitter.emit("greet", "BM");
myEmitter.emit("goodbye", "BM");

//Error handling
myEmitter.on("error", (err) => {
  console.log("An error occured : ", err);
});

//simulating error
myEmitter.emit("error", new Error("Something wnt wrong"));
