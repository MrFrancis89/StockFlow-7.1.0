import { darFeedback } from './utils.js';

let acaoConfirmacao = null;

export function mostrarConfirmacao(msg, callback, tipoBotao = 'perigo') {
    darFeedback();
    const modalText = document.getElementById('modal-text');
    if (modalText) modalText.innerText = msg;
    const btnCancel = document.getElementById('modal-btn-cancel');
    const btnConfirm = document.getElementById('modal-btn-confirm');
    if (btnCancel) {
        btnCancel.style.display = 'block';
        btnCancel.innerText = 'Cancelar';
    }
    if (btnConfirm) {
        btnConfirm.style.display = 'block';
        btnConfirm.innerText = 'Confirmar';
        btnConfirm.style.backgroundColor = (tipoBotao === 'sucesso') ? 'var(--btn-green)' : 'var(--btn-red)';
    }
    const modal = document.getElementById('modal-confirm');
    if (modal) modal.style.display = 'flex';
    acaoConfirmacao = callback;
}

export function fecharModal() {
    const modal = document.getElementById('modal-confirm');
    if (modal) modal.style.display = 'none';
    acaoConfirmacao = null;
}

export function configurarListenersConfirm() {
    const btnConfirm = document.getElementById('modal-btn-confirm');
    const btnCancel = document.getElementById('modal-btn-cancel');
    if (btnConfirm) {
        btnConfirm.addEventListener('click', () => {
            darFeedback();
            if (acaoConfirmacao) acaoConfirmacao();
            fecharModal();
        });
    }
    if (btnCancel) {
        btnCancel.addEventListener('click', () => {
            darFeedback();
            fecharModal();
        });
    }
}

export { acaoConfirmacao };
