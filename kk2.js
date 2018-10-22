var person = {
  name: "Jason"
};
var shout = function() {
  console.log("Hi, my name is", this.name);
}.bind(this);
person.shout = shout;
person.shout();
