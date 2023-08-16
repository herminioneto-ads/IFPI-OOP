# 1. 
Em linguagens com tipagem dinâmica, não precisamos explicitar os tipos dos valores (valor de uma variável ou retorno de uma
função, por exemplo.), sendo esses reconhecidos dinamicamente pela linguagem. Já nas com tipagem estática, precisamos explicitar
os tipos. Por exemplo, uma variável que recebe um número pode ser do tipo inteiro ou float (valor com casas decimais), e esse
tipo deve ser explicitado no momento da declaração dessa variável. Algumas linguagens ainda possuem o recurso de inferência de
tipos, como o TypeScript, onde o tipo de uma variável é determinado pelo valor que você atribui durante a inicialização.

# 2. 
O principal problema se encontra no fato de que linguagens dinamicamente tipadas permitem que você reatribua o valor de uma
variável com outro tipo, o que pode tornar o código mais facilmente suscetível a erros, principalmente em projetos com muitas
linhas.

# 3. 
Suponha que estejamos trabalhando em um sistema de gerenciamento de estoque de uma loja. Temos uma variável chamada 
quantidadeProdutos que armazena a quantidade de produtos em estoque. Inicialmente, essa variável contém um valor numérico, 
digamos, 100 (usarei JavaScript como exemplo):

`let quantidadeProdutos = 100;`

Agora, imagine que em algum ponto do código, acidentalmente reatribuimos um valor diferente à variável quantidadeProdutos, 
mas dessa vez como uma string:

`quantidadeProdutos = "50";`

Devido à tipagem dinâmica, essa reatribuição não resultaria em um erro imediato. No entanto, mais tarde no código, quando
tentarmos realizar operações matemáticas ou comparações usando essa variável, os resultados serão inesperados:

`let totalVenda = quantidadeProdutos * 10;`

Isso resultaria em um erro devido à multiplicação de uma string por um número. Neste exemplo, a tipagem dinâmica permitiu que 
uma variável originalmente numérica se tornasse uma string sem aviso prévio, levando a erros sutis e difíceis de identificar. Isso
pode impactar negativamente a funcionalidade do programa e causar confusão na depuração.

# 4.
A tipagem fraca refere-se à capacidade de uma linguagem de permitir que diferentes tipos de dados sejam operados juntos sem a
necessidade de conversões explícitas. Exemplo:

```
#include <stdio.h>

int main() {
    int numeroInteiro = 10;
    float numeroFloat = 5.5;

    int resultado = numeroInteiro + numeroFloat;

    printf("Resultado: %d\n", resultado);

    return 0;
}
```
Neste exemplo, estamos somando uma variável numeroInteiro (do tipo int) com uma variável numeroFloat (do tipo float). Em muitas 
linguagens com tipagem estática forte, essa operação geraria um erro de tipo, pois não é permitido somar um int com um float sem uma 
conversão explícita. No entanto, na linguagem C, isso compila e executa sem erros. O resultado da soma será 15, porque a linguagem C 
promove automaticamente o float para int e realiza a operação.

# 5.
Vamos supor que estamos escrevendo um programa que lida com entradas do usuário e não temos certeza sobre o tipo de entrada que 
será fornecido. O uso do "any" pode ser útil para lidar com diferentes tipos de entrada. Exemplo em TS:

```
function processInput(input: any): void {
    if (typeof input === 'number') {
        console.log("Você forneceu um número:", input);
    } else if (typeof input === 'string') {
        console.log("Você forneceu uma string:", input);
    } else {
        console.log("Você forneceu um valor de tipo desconhecido:", input);
    }
}

// Chamando a função com diferentes tipos de entrada
processInput(42); // Número
processInput('Olá, mundo!'); // String
processInput(true); // Outro tipo (any)
```
Neste exemplo, a função processInput recebe um parâmetro de tipo any, permitindo que diferentes tipos de valores sejam passados como 
argumentos. A função então verifica o tipo do valor usando typeof e executa ações diferentes com base no tipo.
