///<reference path="person.ts"/>
function printPerson() {
    var person = new Person("Christoph", "Lastname");
    person.sayHello();
    console.log("Finished printing person.");
    document.getElementById("result").innerHTML = person.toString();
}
