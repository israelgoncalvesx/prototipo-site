# 📘 Future School - AVA Inclusivo

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![WCAG](https://img.shields.io/badge/WCAG-2.2_AA-green)

> 🔗 **Acesse o projeto online:** [https://prototipo-site-sage.vercel.app/](https://prototipo-site-sage.vercel.app/)

---

## 📄 Sobre o Projeto

Este repositório contém o "artefato prático" desenvolvido como parte do artigo acadêmico **"Tecnologia com Propósito: Design Inclusivo como Motor da Transformação Digital"**, submetido à **Universidade SENAI CIMATEC**.

O projeto consiste em um protótipo de alta fidelidade de um **Ambiente Virtual de Aprendizagem (AVA)** focado na resolução de problemas de exclusão digital através do Design Universal. O objetivo não é apenas criar uma interface bonita, mas validar como a **tecnologia com propósito** pode ampliar o acesso e fortalecer a cidadania de grupos historicamente marginalizados.

---

## 🎯 Motivação e Problematização

Conforme explorado em nossa pesquisa, muitas tecnologias atuais são projetadas para um "usuário ideal", ignorando a diversidade humana. Isso cria barreiras técnicas e cognitivas que segregam pessoas com deficiência ou baixo letramento digital.

A problematização central deste trabalho é: **"Como o design inclusivo pode orientar a transformação digital para atender à diversidade humana?"**

Este protótipo busca responder a essa pergunta implementando na prática os conceitos de:
* **Design Inclusivo:** Transformar a exclusão em oportunidades de criação.
* **Tecnologia com Propósito:** Foco na resolução de problemas sociais e não apenas no lucro.
* **UX e Gestão do Conhecimento:** Criar experiências intuitivas que respeitem diferentes modos de aprender (baseado no DUA - Desenho Universal para a Aprendizagem).

---

## 💡 Por que Focamos no Front-end?

A decisão de concentrar o desenvolvimento exclusivamente no **Front-end (HTML, CSS, JavaScript)** é estratégica e fundamentada na metodologia da pesquisa:

1.  **Foco na Interface como Mediadora:** Segundo a fundamentação teórica do artigo, é na camada de interface (UI) e na experiência do usuário (UX) que as barreiras de acessibilidade acontecem.
2.  **Validação de Diretrizes WCAG:** O objetivo do artefato é testar a aplicação das normas **WCAG 2.2** (contraste, navegação por teclado, leitores de tela), que são implementadas majoritariamente no front-end.
3.  **Testes de Usabilidade:** Para realizar os testes A/B propostos na metodologia (comparando usabilidade e satisfação), era necessário um protótipo visual e interativo de alta fidelidade, dispensando, neste momento, a complexidade de um banco de dados real (Back-end).

---

## ♿ Funcionalidades de Acessibilidade Implementadas

Este AVA inclui recursos nativos e assistivos para atingir o nível de conformidade esperado:

* **Leitor de Tela (TTS):** Utiliza a *Web Speech API* para leitura de conteúdo.
* **Ditado por Voz (STT):** Permite preenchimento de campos de texto por voz (para pessoas com dificuldades motoras/fibromialgia).
* **VLibras:** Widget para tradução automática em Libras.
* **Modos de Visualização:** Alto Contraste (Daltônico), Modo Escuro e Fonte para Dislexia.
* **Navegação por Teclado:** Foco visível e "Skip Links".

---

## 👥 Autores e Orientação

Este trabalho foi desenvolvido por discentes de Engenharia da Computação da **Universidade SENAI CIMATEC**:

* **Israel Gabriel Gonçalves Almeida Dos Santos**
* **Maria Eduarda Machado Lombardi de Farias**
* **Mateus Salmeron Burgos Andrade**
* **Marcel Guedes Alcoforado Trindade**
* **Pedro Henrique Grivicich Aguiar**
* **Gustavo Maia de Jesus**
* **André Luiz Rangel dos Santos**

### Orientação
* **Orientador:** Prof. Dr. Jerisnaldo Matos Lopes
* **Docente da Disciplina:** Profa. Isadora Novaes Schefler Barbosa Costa

---

## 🛠️ Como Executar

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repo.git](https://github.com/seu-usuario/nome-do-repo.git)
    ```
2.  Abra o arquivo `index.html` em seu navegador preferido.
3.  Para testar as funcionalidades de voz (microfone), recomenda-se usar o **Live Server** do VS Code ou hospedar em ambiente HTTPS (como a Vercel).

---

### 📄 Referência do Artigo Base
> SANTOS, I. G. G. A. D., et al. *Tecnologia com Propósito: Design Inclusivo como Motor da Transformação Digital*. Universidade SENAI CIMATEC, 2025.
