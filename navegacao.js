// navegacao.js
import { darFeedback } from './utils.js';

export function iniciarNavegacao() {
    const tabs = document.querySelectorAll('.nav-tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            if (!target) return;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            contents.forEach(content => content.classList.remove('active'));
            const section = document.getElementById(target + '-section');
            if (section) {
                section.classList.add('active');
            }
            darFeedback();
        });
    });
}
