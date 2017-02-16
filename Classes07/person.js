var Person = (function () {
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello " + this.firstname + " " + this.lastname + ".");
    };
    Person.prototype.toString = function () {
        return this.firstname + " " + this.lastname;
    };
    return Person;
}());
