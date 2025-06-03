function sayHello() {
  let name = prompt("What's your name?");
  if (name) {
    alert("Hello, " + name + "!");
  } else {
    alert("Hello, stranger!");
  }
}