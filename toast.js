import { darFeedback } from './utils.js';

export function mostrarToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

export function mostrarAlertaElegante(msg) {
    darFeedback();
    const modalText = document.getElementById('modal-text');
    if (!modalText) return;
    modalText.innerText = msg;
    const btnCancel = document.getElementById('modal-btn-cancel');
    const btnConfirm = document.getElementById('modal-btn-confirm');
    if (btnCancel) btnCancel.style.display = 'none';
    if (btnConfirm) {
        btnConfirm.style.display = 'block';
        btnConfirm.innerText = 'OK';
        btnConfirm.style.backgroundColor = 'var(--btn-blue)';
    }
    const modal = document.getElementById('modal-confirm');
    if (modal) modal.style.display = 'flex';
    window.acaoConfirmacao = null;
}
