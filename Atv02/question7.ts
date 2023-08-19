// Resolução da questão 7:

class Professor {
    name:string;
    time:number;
    language:string;

    constructor(name:string, time:number, language:string){
        this.name = name;
        this.time = time;
        this.language = language;
    }

    exibition():string{
        const res:string = `${this.name}\nMy payment time is ${this.time}\nand\nmy preffered language is ${this.language}`;
        return res;
    }
}

const ely: Professor = new Professor("Ely", 120.56, "TypeScript");
console.log(ely.exibition());
