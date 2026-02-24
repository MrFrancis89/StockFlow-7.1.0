# StockFlow Pro

**StockFlow Pro** é um aplicativo web progressivo (PWA) para gerenciamento de estoque e listas de compras, desenvolvido com HTML, CSS e JavaScript puro (Vanilla). Ele oferece uma interface intuitiva e responsiva, ideal para uso em dispositivos móveis e desktop.

![Version](https://img.shields.io/badge/version-6.2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Funcionalidades

- **Gestão completa de estoque** – Adicione, edite, remova e categorize produtos automaticamente.
- **Lista de compras inteligente** – Itens marcados no estoque são automaticamente adicionados à lista de compras.
- **Categorização automática** – Os produtos são organizados em categorias como Carnes, Laticínios, Hortifruti, etc., com base em palavras‑chave.
- **Sistema de alertas** – Defina quantidades mínimas e máximas para cada item; o sistema notifica quando os limites são atingidos.
- **Calculadora integrada** – Abra a calculadora ao clicar em um campo de quantidade; suporte a operações básicas (+, -, ×, ÷).
- **Modo teclado** – Na calculadora, clique em "Usar teclado" para digitar quantidades manualmente (incluindo frações como `1/2`, que são convertidas automaticamente para decimal).
- **Reconhecimento de voz** – Use o microfone para buscar produtos ou adicionar itens (comando de voz).
- **Lupa flutuante** – Arraste a lupa para qualquer posição; clique para abrir a busca, duplo toque para ativar o microfone.
- **Tema claro/escuro** – Alterne entre os modos com um clique.
- **Persistência de dados** – Tudo é salvo no `localStorage` do navegador.
- **Exportação/Importação** – Salve sua lista em um arquivo JSON e carregue‑a posteriormente.
- **Compartilhamento** – Envie o estoque ou a lista de compras via WhatsApp ou copie para a área de transferência.
- **Swipe em itens** – Deslize um item para a esquerda para apagá‑lo ou configurar alertas.
- **Novidades automáticas** – Ao atualizar o app, um modal exibe as principais mudanças da nova versão.

## 🖼️ Capturas de Tela

| Estoque | Compras | Adicionar |
|---------|---------|-----------|
| ![Estoque](screenshots/estoque.png) | ![Compras](screenshots/compras.png) | ![Adicionar](screenshots/adicionar.png) |

> *Nota: As imagens são ilustrativas. Substitua pelos seus próprios prints.*

## 🚀 Tecnologias Utilizadas

- **HTML5** – Estrutura semântica e acessível.
- **CSS3** – Design moderno com variáveis CSS, transições e suporte a temas claro/escuro.
- **JavaScript (ES6+)** – Código modularizado em arquivos separados, usando `import/export`.
- **Módulos ES6** – Organização do código em pequenos módulos reutilizáveis.
- **LocalStorage** – Persistência dos dados no navegador.
- **Web Speech API** – Reconhecimento de voz para busca e adição de produtos.
- **Vibration API** – Feedback tátil em dispositivos compatíveis.

## 📦 Estrutura do Projeto
