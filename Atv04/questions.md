# 1.
F-V-F-F-V-V-V

# 2.
Sim, haverá um problema no momento da execução pois a variável "quantReservas" não foi inicializada, não sendo possível realizar o incremento. Deve-se atribuir um valor à variável antes de realizar operações com ela.

# 3.
```
class Hotel {
    quantReservas : number;

    constructor(quantReservas : number){
        this.quantReservas = quantReservas;
    }

    adicionarReserva() : void {
        quantReservas++;
    }
}

let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas); // Resultado = 2
```

# 4.
O erro ocorre pois o construtor da classe Radio exige que o atributo volume seja inicializado como parâmetro no momento da criação de um novo objeto. A solução seria:
```
class Radio {
volume : number;
    constructor(volume : number) {
        this.volume = volume;
    }
}
    let r : Radio = new Radio(10);
```

# 5.
a)
```
console.log(c1.consultarSaldo()); // 90
console.log(c2.consultarSaldo()); // 90
console.log(c3.consultarSaldo()); // 90
```
b) O objeto continua existindo na memória, porém nada aponta para ele.

# 6.
```
class Saudacao {
  texto: string;
  destinatario: string;

  constructor(texto: string, destinatario: string) {
    this.texto = texto;
    this.destinatario = destinatario;
  }

  obterSaudacao(): string {
    return `${this.texto}, ${this.destinatario}`;
  }
}

const saudacao: Saudacao = new Saudacao("Bom dia", "João");
console.log(saudacao.obterSaudacao()); // Output: "Bom dia, João"
```

# 7.
```
class Triangulo {
  ladoA: number;
  ladoB: number;
  ladoC: number;

  constructor(a: number, b: number, c: number) {
    this.ladoA = a;
    this.ladoB = b;
    this.ladoC = c;
  }

  private verificaTriangulo(): boolean {
    return Math.abs(this.ladoB - this.ladoC) < this.ladoA && this.ladoA < this.ladoB + this.ladoC;
  }

  ehIsosceles(): boolean {
    if (!this.verificaTriangulo()) return false;
    return this.ladoA === this.ladoB || this.ladoA === this.ladoC || this.ladoB === this.ladoC;
  }

  ehEquilatero(): boolean {
    if (!this.verificaTriangulo()) return false;
    return this.ladoA === this.ladoB && this.ladoA === this.ladoC;
  }

  ehEscaleno(): boolean {
    if (!this.verificaTriangulo()) return false;
    return this.ladoA !== this.ladoB && this.ladoA !== this.ladoC && this.ladoB !== this.ladoC;
  }
}

const triangulo1 = new Triangulo(3, 4, 5);
console.log("É isósceles? " + triangulo1.ehIsosceles()); // false
console.log("É equilátero? " + triangulo1.ehEquilatero()); // false
console.log("É escaleno? " + triangulo1.ehEscaleno()); // true

const triangulo2 = new Triangulo(3, 3, 3);
console.log("É isósceles? " + triangulo2.ehIsosceles()); // true
console.log("É equilátero? " + triangulo2.ehEquilatero()); // true
console.log("É escaleno? " + triangulo2.ehEscaleno()); // false
```

# 8.
```
class Equipamento {
  ligado: boolean = false;

  liga(): void {
    if (!this.ligado) {
      this.ligado = true;
      console.log("Equipamento ligado.");
    } else {
      console.log("O equipamento já está ligado.");
    }
  }

  desliga(): void {
    if (this.ligado) {
      this.ligado = false;
      console.log("Equipamento desligado.");
    } else {
      console.log("O equipamento já está desligado.");
    }
  }

  inverte(): void {
    this.ligado = !this.ligado;
    console.log(this.ligado ? "Equipamento ligado." : "Equipamento desligado.");
  }

  estaLigado(): boolean {
    return this.ligado;
  }
}

const equipamento1 = new Equipamento();
equipamento1.liga(); // Liga o equipamento
equipamento1.desliga(); // Desliga o equipamento
equipamento1.liga(); // Liga o equipamento novamente
equipamento1.inverte(); // Desliga o equipamento
console.log("O equipamento está ligado? " + equipamento1.estaLigado()); // false
```

# 9.
```
class Conta {
    numero: String;
    saldo: number;

    constructor(numero: String, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            return true; // Saque bem-sucedido
        }
        return false; // Saque não realizado
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true; // Transferência bem-sucedida
        }
        return false; // Transferência não realizada
    }
}

// Teste das operações

const conta1 = new Conta("1", 100);
const conta2 = new Conta("2", 200);

console.log("Saldo conta1 antes do saque:", conta1.consultarSaldo());

const saqueBemSucedido = conta1.sacar(50);
console.log("Saque bem-sucedido?", saqueBemSucedido);
console.log("Saldo conta1 após saque:", conta1.consultarSaldo());

const transferenciaBemSucedida = conta1.transferir(conta2, 30);
console.log("Transferência bem-sucedida?", transferenciaBemSucedida);
console.log("Saldo conta1 após transferência:", conta1.consultarSaldo());
console.log("Saldo conta2 após transferência:", conta2.consultarSaldo());
```

# 10.
```
class Jogador {
  forca: number;
  nivel: number;
  pontos: number;

  constructor(forca: number, nivel: number, pontos: number) {
    this.forca = forca;
    this.nivel = nivel;
    this.pontos = pontos;
  }

  calcularAtaque(): number {
    return this.forca * this.nivel;
  }

  atacar(atacado: Jogador): void {
    if (atacado.estaVivo()) {
      const dano = this.calcularAtaque();
      atacado.pontos -= dano;
    }
  }

  estaVivo(): boolean {
    return this.pontos > 0;
  }

  toString(): string {
    return `Força: ${this.forca}, Nível: ${this.nivel}, Pontos: ${this.pontos}`;
  }
}

const jogador1 = new Jogador(10, 5, 100);
const jogador2 = new Jogador(8, 6, 120);

jogador1.atacar(jogador2);
jogador2.atacar(jogador1);

console.log("Jogador 1: " + jogador1.toString());
console.log("Jogador 2: " + jogador2.toString());
```