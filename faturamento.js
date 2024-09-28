
// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamentoDiario = [
    200.50, 0, 300.00, 400.25, null, 
    500.75, 600.00, null, 700.20, 800.00, 
    0, 900.00, 1000.00, null, 0,
    150.00, 300.50, null, 400.00, 0,
    600.00, null, 700.50, 800.00, 900.25
];
let somaMensal = 0;
let faturamentoSuperior = 0;
let faturamentoFiltrado = [];

for (let i = 0; i <= faturamentoDiario.length; i++){
    if (faturamentoDiario[i] > 0) {
        somaMensal += faturamentoDiario[i];
        faturamentoFiltrado.push(faturamentoDiario[i]);
    }    
}

// Menor valor mensal, maior valor mensal e media mensal
const menorValor = Math.min(...faturamentoFiltrado);
const maiorValor = Math.max(...faturamentoFiltrado);
let mediaMensal = Math.round(somaMensal / 25);

// Quantidade de dias que o faturamento foi maior que a media mensal 
for (let i = 0; i <= faturamentoFiltrado.length; i++){
    if (faturamentoFiltrado[i] > mediaMensal)
        faturamentoSuperior += 1;
}
