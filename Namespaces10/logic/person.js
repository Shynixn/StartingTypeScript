///<reference path="../contract/iperson.ts"/>
var CmSpace;
(function (CmSpace) {
    var Logic;
    (function (Logic) {
        var EntityFactory = (function () {
            function EntityFactory() {
            }
            EntityFactory.createPerson = function (firstname, lastname) {
                var person = new Person();
                person.Firstname = firstname;
                person.Lastname = lastname;
                return person;
            };
            return EntityFactory;
        }());
        Logic.EntityFactory = EntityFactory;
        var Person = (function () {
            function Person() {
            }
            Object.defineProperty(Person.prototype, "Firstname", {
                get: function () {
                    return this.firstname;
                },
                set: function (value) {
                    this.firstname = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Person.prototype, "Lastname", {
                get: function () {
                    return this.lastname;
                },
                set: function (value) {
                    this.lastname = value;
                },
                enumerable: true,
                configurable: true
            });
            return Person;
        }());
    })(Logic = CmSpace.Logic || (CmSpace.Logic = {}));
})(CmSpace || (CmSpace = {}));
