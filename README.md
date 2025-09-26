# StudyLog - Tracker de Estudos

Este projeto é uma Single Page Application (SPA) para registrar sessões de estudo, construída com React, TypeScript e Vite, como parte do Checkpoint 5.

## Integrantes do Grupo

* **Nome do Integrante 1: Larissa Juvenal de Magalhães rm 566457
* **Nome do Integrante 2: Kevin Martins Campos rm 563454
* **Nome do Integrante 3:Raul Junior Bento dos Santos rm 563458

## Como Rodar o Projeto

1.  Clone o repositório:
    ```bash
    git clone https://github.com/DVKevin/cp5-front-1tdspv
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Execute o projeto em modo de desenvolvimento:
    ```bash
    npm run dev
    ```

    ## Otimizações (useMemo / useCallback)

* **`useCallback`**: Foi aplicado no `App.tsx` nas funções `addStudySession` e `removeStudySession` para evitar recriações desnecessárias dessas funções a cada renderização, otimizando a performance dos componentes filhos que as recebem como props.
* **`useMemo`**: Utilizado no componente `src/pages/add-nova-sessao.tsx` para calcular o total de sessões e o tempo total de estudo (`studySessionTotal` e `studyMinutes`). Isso garante que os cálculos só sejam refeitos quando a lista de `studies` for alterada.
    
## Link do Deploy

*https://cp5-front-1tdspv-five.vercel.app/*
