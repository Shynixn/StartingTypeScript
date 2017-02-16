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
///<reference path="../logic/person.ts"/>
var CmSpace;
(function (CmSpace) {
    var App;
    (function (App) {
        var EntityFactory = CmSpace.Logic.EntityFactory;
        var CustomUI = (function () {
            function CustomUI() {
            }
            CustomUI.printUI = function () {
                var person = EntityFactory.createPerson("Max", "Power");
                document.getElementById("result").innerHTML = person.Firstname + "." + person.Lastname;
            };
            return CustomUI;
        }());
        App.CustomUI = CustomUI;
    })(App = CmSpace.App || (CmSpace.App = {}));
})(CmSpace || (CmSpace = {}));
///<reference path="logic/person.ts"/>
///<reference path="app/app.ts"/>
var CustomUI = CmSpace.App.CustomUI;
console.log("Printing the UI.");
CustomUI.printUI();
