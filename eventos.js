import { darFeedback } from './utils.js';
import { salvarDados } from './storage.js';
import { coletarDadosDaTabela } from './tabela.js';
import { atualizarPainelCompras } from './compras.js';

export function alternarCheck(box) {
    if (!box) return;
    darFeedback();
    let linha = box.closest('tr');
    if (!linha) return;
    if (box.checked) {
        linha.classList.add("linha-marcada");
    } else {
        linha.classList.remove("linha-marcada");
        const checkTodos = document.getElementById('check-todos');
        if (checkTodos) checkTodos.checked = false;
    }
    const dados = coletarDadosDaTabela();
    salvarDados(dados);
    atualizarPainelCompras();
}

export function alternarTodos(masterBox) {
    if (!masterBox) return;
    darFeedback();
    let isChecked = masterBox.checked;
    document.querySelectorAll("#lista-itens-container tr:not(.categoria-header-row)").forEach(r => {
        if (r.style.display !== "none") {
            let box = r.querySelector("input[type='checkbox']");
            if (box) {
                box.checked = isChecked;
                if (isChecked) {
                    r.classList.add("linha-marcada");
                } else {
                    r.classList.remove("linha-marcada");
                }
            }
        }
    });
    const dados = coletarDadosDaTabela();
    salvarDados(dados);
    atualizarPainelCompras();
}