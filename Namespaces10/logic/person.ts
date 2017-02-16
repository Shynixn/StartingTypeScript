///<reference path="../contract/iperson.ts"/>
namespace CmSpace.Logic {
    import IPerson = CmSpace.Contract.IPerson;
    export class EntityFactory {
        static createPerson(firstname: string, lastname: string): IPerson {
            let person = new Person();
            person.Firstname = firstname;
            person.Lastname = lastname;
            return person;
        }
    }
    class Person implements IPerson {
        private firstname: string;
        private lastname: string;

        get Firstname(): string {
            return this.firstname;
        }

        get Lastname(): string {
            return this.lastname;
        }

        set Firstname(value) {
            this.firstname = value;
        }

        set Lastname(value) {
            this.lastname = value;
        }
    }
}