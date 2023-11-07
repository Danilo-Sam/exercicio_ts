function multiplicar(numA : number, numB : number): number {
    const res: number = numA * numB
    return res;
}

const n1: number = 9;
const n2: number = 7;

const resultado: number = multiplicar(n1, n2)

console.log(resultado);

const nome: string = "Danilo Sampaio";

function saudacao(): string {
    return "Olá " + nome;
}

console.log(saudacao());