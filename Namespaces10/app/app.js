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
                var person = EntityFactory.createPerson("Max", "Mustermann");
                document.getElementById("result").innerHTML = person.Firstname + "." + person.Lastname;
            };
            return CustomUI;
        }());
        App.CustomUI = CustomUI;
    })(App = CmSpace.App || (CmSpace.App = {}));
})(CmSpace || (CmSpace = {}));
