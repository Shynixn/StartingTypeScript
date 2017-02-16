class Person {
    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    sayHello(): void {
        console.log("Hello " + this.firstname + " " + this.lastname + ".")
    }

    toString(): string {
        return this.firstname + " " + this.lastname;
    }
}