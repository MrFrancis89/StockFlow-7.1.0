import { coletarDadosDaTabela } from './tabela.js';
import { obterDataAmanha } from './utils.js';

const ulCompras = document.getElementById("lista-compras-visual");
const areaCompras = document.getElementById("area-compras");

export function atualizarPainelCompras() {
    if (!ulCompras || !areaCompras) return;
    ulCompras.innerHTML = "";
    let temItens = false;
    document.querySelectorAll("#lista-itens-container tr:not(.categoria-header-row)").forEach(r => {
        let checkbox = r.querySelector("input[type='checkbox']");
        if (checkbox && checkbox.checked) {
            temItens = true;
            let li = document.createElement("li");
            li.innerText = r.querySelector(".nome-prod").innerText.replace(/(\r\n|\n|\r)/gm, " ").trim();
            ulCompras.appendChild(li);
        }
    });
    areaCompras.style.display = temItens ? "block" : "none";
}

export function gerarTextoCompras() {
    let t = "*LISTA DE COMPRAS " + obterDataAmanha() + "*\n\n";
    let itens = [];
    document.querySelectorAll("#lista-itens-container tr:not(.categoria-header-row)").forEach(r => {
        let check = r.querySelector("input[type='checkbox']");
        if (check && check.checked) {
            itens.push(r.querySelector(".nome-prod").innerText.replace(/(\r\n|\n|\r)/gm, " ").trim());
        }
    });
    itens.sort();
    itens.forEach(i => t += `${i}\n`);
    return t;
}