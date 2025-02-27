// 1) Soma dos números de 1 a 13
function calculaSoma() {
    let soma = 0;
    for (let k = 1; k <= 13; k++) {
        soma += k;
    }
    console.log("1) Soma:", soma);
}

// 2) Verifica se um número pertence a sequência de Fibonacci
function verificaFibonacci(numero) {
    let a = 0, b = 1;
    while (b <= numero) {
        if (b === numero) return true;
        [a, b] = [b, a + b];
    }
    return false;
}

// 3) Análise do faturamento diário
function analisaFaturamento(dados) {
    const valoresValidos = dados.filter(dia => dia.valor > 0);
    
    const menor = Math.min(...valoresValidos.map(dia => dia.valor));
    const maior = Math.max(...valoresValidos.map(dia => dia.valor));
    
    const media = valoresValidos.reduce((acc, dia) => acc + dia.valor, 0) / valoresValidos.length;
    const diasAcimaDaMedia = valoresValidos.filter(dia => dia.valor > media).length;
    
    console.log("\n3) Análise de faturamento:");
    console.log(`Menor valor: R$ ${menor.toFixed(2)}`);
    console.log(`Maior valor: R$ ${maior.toFixed(2)}`);
    console.log(`Dias acima da média: ${diasAcimaDaMedia}`);
}

// 4) Percentual de representação por estado
function calculaPercentual() {
    const faturamento = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };
    
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    
    console.log("\n4) Percentual por estado:");
    for (const [estado, valor] of Object.entries(faturamento)) {
        const percentual = (valor / total * 100).toFixed(2);
        console.log(`${estado}: ${percentual}%`);
    }
}

// 5) Inversão de string
function inverteString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

// Execução dos exercícios
const fs = require('fs');
const dados = JSON.parse(fs.readFileSync('./dados.json', 'utf8'));

// Resultados
calculaSoma();

const numeroTeste = 34;
console.log(`\n2) O número ${numeroTeste} ${verificaFibonacci(numeroTeste) ? 'pertence' : 'não pertence'} à sequência de Fibonacci`);

analisaFaturamento(dados);

calculaPercentual();

const textoTeste = "Target Sistemas";
console.log(`\n5) String invertida: ${inverteString(textoTeste)}`);
