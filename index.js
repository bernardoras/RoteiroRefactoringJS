const { readFileSync } = require('fs');

var Repositorio = require("./repositorio");
var ServicoCalculoFatura = require("./servico");
var gerarFaturaStr = require("./apresentacao");

/*
function gerarFaturaHTML(fatura, pecas, calc) {
  
  let faturaHTML = '<html>\n<p> Fatura ' + fatura.cliente + ' </p>\n<ul>\n';
  for (let apre of fatura.apresentacoes) {

    faturaHTML += `<li>  ${getPeca(pecas, apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(pecas, apre))} (${apre.audiencia} assentos) </li>\n`;
  }
  faturaHTML += '</ul>\n';

  faturaHTML += `<p> Valor total: ${formatarMoeda(calc.calcularTotalFatura(pecas, fatura.apresentacoes))} </p>\n`;
  faturaHTML += `<p> Créditos acumulados: ${calc.calcularTotalCreditos(pecas, fatura.apresentacoes)} </p>\n`;

  faturaHTML += '</html>'

  return faturaHTML
}
*/

const faturas = JSON.parse(readFileSync('./faturas.json'));
const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
//const faturaHTML = gerarFaturaHTML(faturas, pecas, calc);
console.log(faturaStr);
//console.log(faturaHTML);