///<reference path="person.ts"/>
function printPerson() {
    var person = new Person("Christoph", "Lastname");
    person.sayHello();
    console.log("Finished printing person.");
    document.getElementById("result").innerHTML = person.sayHello() + "\\";
    var anotherPerson = {
        firstname: "Franklin",
        lastname: "May",
        sayHello: function () {
            return " My name is " + this.firstname + " " + this.lastname;
        }
    };
    document.getElementById("result").innerHTML += anotherPerson.sayHello();
    printPutPerson(person);
    printPutPerson({ firstname: "Max", lastname: "Power", sayHello: function () {
            return " My name is " + this.firstname + " " + this.lastname;
        } });
}
function printPutPerson(person) {
    document.getElementById("result").innerHTML += "\\" + person.sayHello();
}
