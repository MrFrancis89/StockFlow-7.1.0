# Changelog

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [6.2.2] - 2025-04-09

### Corrigido
- **Lista pré-definida**: Agora os produtos padrão são carregados corretamente ao iniciar o aplicativo. Foi adicionada uma verificação de segurança para garantir que a importação dos produtos não falhe silenciosamente.
- **Fallback de produtos**: Em caso de falha na importação, uma lista mínima de produtos essenciais é carregada para evitar que a interface fique vazia.
- Pequenos ajustes para melhorar a robustez do código.

---

## [6.2.1] - 2025-04-08

### Corrigido
- Função `atualizarDropdown` agora está disponível globalmente.
- Toast de alerta agora funciona corretamente.
- Eliminada dependência circular entre módulos.

---

## [6.2.0] - 2025-04-08

### Adicionado
- Nova aba "Adicionar" para separar o formulário de inclusão de produtos.
- Botão "Ocultar" renomeado para "Apagar".

---

## [6.1.1] - 2025-04-08

### Corrigido
- Microfone no duplo toque da lupa.
- Lista de compras atualizada ao marcar/desmarcar itens.

---

## [6.1.0] - 2025-04-08

### Adicionado
- Alternância entre calculadora e teclado nativo.
- Ícone de retorno à calculadora.
- Parser de frações.

---

## [6.0.0] - 2025-04-08

### Adicionado
- Navegação por abas.
- Sistema de novidades automáticas.
- Versão dinâmica no título.

---

## [5.3.1] - 2025-04-08

### Adicionado
- Dica de swipe, tooltips, acessibilidade.

---

## [5.3.0] - 2025-03-15

### Versão inicial
- Lista categorizada, swipe, calculadora, voz, tema, exportação, compras, lupa.
