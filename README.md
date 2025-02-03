# Testes-API-Cypress

Este projeto contém testes automatizados para APIs utilizando Cypress.

## Pré-requisitos

- Node.js (versão 12 ou superior)
- npm (geralmente instalado junto com o Node.js)

## Instalação

1. Clone o repositório:
    ```bash
    git clone <https://github.com/HenriCarv/Testes-API-Cypress.git>
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd Testes-API-Cypress
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

## Dependências

As principais dependências utilizadas neste projeto são:

- [Cypress](https://www.cypress.io/): Framework de testes end-to-end.
- [Mocha](https://mochajs.org/): Framework de testes JavaScript.
- [Chai](https://www.chaijs.com/): Biblioteca de asserções para testes.

## Executando os Testes

Para executar os testes, utilize o seguinte comando:
```bash
npx cypress open
```
Isso abrirá a interface do Cypress, onde você poderá selecionar e executar os testes.

## Estrutura do Projeto

- `cypress/fixtures`: Contém arquivos de dados estáticos utilizados nos testes.
- `cypress/integration`: Contém os arquivos de teste.
- `cypress/plugins`: Contém arquivos de configuração de plugins.
- `cypress/support`: Contém comandos customizados e configurações adicionais.


