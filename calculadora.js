import { darFeedback } from './utils.js';
import { mostrarToast } from './toast.js';
import { salvarDados } from './storage.js';
import { coletarDadosDaTabela } from './tabela.js';
import { verificarAlertas } from './alerta.js';

let inputCalculadoraAtual = null;
let expressaoCalc = "";

export function abrirCalculadora(inputElement) {
    if (!inputElement) return;
    darFeedback();
    inputElement.blur();
    inputCalculadoraAtual = inputElement;
    let tituloCalc = "🧮 Calculadora";
    if (inputElement.id === "novoQtd") {
        let nomeNovo = document.getElementById("novoProduto")?.value.trim();
        tituloCalc = nomeNovo ? "🧮 " + nomeNovo : "🧮 NOVO ITEM";
    } else {
        let linha = inputElement.closest("tr");
        if (linha) {
            let nomeTabela = linha.querySelector(".nome-prod")?.innerText.trim();
            tituloCalc = nomeTabela ? "🧮 " + nomeTabela : "🧮 Calculadora";
        }
    }
    const calcTitle = document.getElementById("calc-title");
    if (calcTitle) calcTitle.innerText = tituloCalc;
    let val = inputElement.value.replace(',', '.').trim();
    expressaoCalc = val || "";
    atualizarDisplayCalc();
    const modalCalc = document.getElementById('modal-calc');
    if (modalCalc) modalCalc.style.display = 'flex';
}

export function fecharCalculadora() {
    darFeedback();
    const modalCalc = document.getElementById('modal-calc');
    if (modalCalc) modalCalc.style.display = 'none';
    inputCalculadoraAtual = null;
}

export function calcDigito(digito) {
    darFeedback();
    if (digito === 'C') {
        expressaoCalc = "";
    } else if (digito === 'BACK') {
        expressaoCalc = expressaoCalc.slice(0, -1);
    } else {
        if (digito === ',') digito = '.';
        expressaoCalc += digito;
    }
    atualizarDisplayCalc();
}

function atualizarDisplayCalc() {
    let display = document.getElementById('calc-display');
    if (display) display.innerText = expressaoCalc.replace(/\./g, ',') || "0";
}

export function calcSalvar() {
    darFeedback();
    try {
        let expr = expressaoCalc.replace(/×/g, '*').replace(/÷/g, '/');
        expr = expr.replace(/[^0-9+\-*/.]/g, '');
        if (expr && inputCalculadoraAtual) {
            let resultado = Function('"use strict";return (' + expr + ')')();
            if (!isFinite(resultado)) throw new Error("Erro");
            resultado = Math.round(resultado * 100) / 100;
            inputCalculadoraAtual.value = resultado.toString().replace('.', ',');
        } else if (inputCalculadoraAtual) {
            inputCalculadoraAtual.value = "";
        }
        const dados = coletarDadosDaTabela();
        salvarDados(dados);
        fecharCalculadora();
        mostrarToast("Quantidade Salva ✅");
        verificarAlertas();
    } catch (e) {
        const display = document.getElementById('calc-display');
        if (display) display.innerText = "Erro";
        setTimeout(atualizarDisplayCalc, 1000);
    }
}

export function getInputCalculadoraAtual() {
    return inputCalculadoraAtual;
}
