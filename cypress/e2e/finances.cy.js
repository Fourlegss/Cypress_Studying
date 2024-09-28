/// <reference types="cypress" />

describe('Transações', () => {

    // hooks → executar antes ou depois / de cada ou de todos os testes
    // before
    // after
    // beforeEach
    // afterEach

    beforeEach(() => {
        cy.visit("https://dev-finance.netlify.app") // Abre o site
    });
    it('Cadastrar uma entrada', () => {
        criarTransacao("Freela", 250)
        //assertion
        cy.get("tbody tr td.description").should("have.text", "Freela") // verifica se o texto existe
    });
    it('Cadastrar uma saída', () => {
        criarTransacao("Cinema", -50)
        //assertion
        cy.get("tbody tr td.description").should("have.text", "Cinema") // verifica se o texto existe
    });
    it('Excluir Transação', () => {
        criarTransacao("Freela", 100)
        cy.contains(".description", "Freela") //Verifica o que contém a palavra Freela dentro da classe .description
            .parent() //Usado para voltar acima do .description
            .find('img') // procura uma imagem
            .click()
        //assertion
        cy.get('tbody tr').should("have.length", 0) // identifica se a quantidade de linhas é igual a 0
    });
});
function criarTransacao(descricao, valor){
    cy.contains("Nova Transação").click() // realiza o click em "Nova Transação"
    cy.get('#description').type(descricao) //da um input no campo descrição
    cy.get('#amount').type(valor) //da um imput no valor
    cy.get('#date').type("2024-09-21") //yyy-mm-dd
    cy.contains('button', 'Salvar').click() //clica no botão salvar
}