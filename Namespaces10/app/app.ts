///<reference path="../logic/person.ts"/>
namespace CmSpace.App {
    import EntityFactory = CmSpace.Logic.EntityFactory;
    export class CustomUI {
        static printUI(): void {
            let person = EntityFactory.createPerson("Max", "Power");
            document.getElementById("result").innerHTML = person.Firstname + "." + person.Lastname;
        }
    }
}