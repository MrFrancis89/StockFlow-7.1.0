# Changelog

Todas as alterações notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [7.0.0] - 2025-04-10

### Adicionado
- **Redesign completo**: Interface agora segue o estilo Apple Store, com paleta sóbria (tons de cinza, branco, azul como destaque), cards com cantos arredondados, sombras suaves e tipografia Inter.
- **Modo escuro**: Adaptado para manter a mesma elegância no tema escuro.
- **Botões e abas**: Estilizados conforme referência, com feedback visual aprimorado.
- **Correções de navegação**: A aba "Adicionar" agora funciona corretamente.
- **Robustez**: Adicionadas verificações de existência de elementos nos event listeners para evitar erros.

### Alterado
- Toda a estilização do CSS foi reescrita para refletir o novo visual.
- Versão do projeto atualizada para **v7.0.0**.

---

## [6.2.3] - 2025-04-09

### Corrigido
- Erro de sintaxe no módulo da calculadora (caractere 'p' removido).
- Melhoria no alerta: itens com quantidade igual ou superior ao mínimo definido agora são automaticamente desmarcados da lista de compras.

---

## [6.2.2] - 2025-04-09

### Corrigido
- Lista pré-definida agora carrega corretamente.
- Fallback de produtos em caso de falha.

---

## [6.2.1] - 2025-04-08

### Corrigido
- Função `atualizarDropdown` disponível globalmente.
- Toast de alerta funciona corretamente.
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