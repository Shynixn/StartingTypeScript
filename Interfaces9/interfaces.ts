///<reference path="person.ts"/>

function printPerson() {
    let person = new Person("Christoph", "Lastname");
    person.sayHello();
    console.log("Finished printing person.")
    document.getElementById("result").innerHTML = person.sayHello() + "\\";

    let anotherPerson: IPerson = {
        firstname: "Franklin",
        lastname: "May",
        sayHello: function () {
            return " My name is " + this.firstname + " " + this.lastname;
        }
    }

    document.getElementById("result").innerHTML += anotherPerson.sayHello();

    printPutPerson(person);
    printPutPerson({firstname: "Max", lastname:"Power", sayHello:function () {
        return " My name is " + this.firstname + " " + this.lastname;
    }});
}

function printPutPerson(person: IPerson) {
    document.getElementById("result").innerHTML += "\\" + person.sayHello();
}
