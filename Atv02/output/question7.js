"use strict";
// Resolução da questão 7:
class Professor {
    constructor(name, time, language) {
        this.name = name;
        this.time = time;
        this.language = language;
    }
    exibition() {
        const res = `${this.name}\nMy payment time is ${this.time}\nand\nmy preffered language is ${this.language}`;
        return res;
    }
}
const ely = new Professor("Ely", 120.56, "TypeScript");
console.log(ely.exibition());
