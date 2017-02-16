interface IPerson {
    firstname: string,
    lastname: string,
    sayHello(): string;
}

class Person implements IPerson {
    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;

    }

    sayHello(): string {
        return "Hello " + this.firstname + " " + this.lastname;
    }
}

