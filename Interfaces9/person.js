var Person = (function () {
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Person.prototype.sayHello = function () {
        return "Hello " + this.firstname + " " + this.lastname;
    };
    return Person;
}());
