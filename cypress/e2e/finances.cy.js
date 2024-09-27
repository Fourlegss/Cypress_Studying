/// <reference types="cypress" />

describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://dev-finance.netlify.app") // Abre o site
        
        cy.contains("Nova Transação").click() // realiza o click em "Nova Transação"
        cy.get('#description').type("Freela") //da um input no campo descrição
        cy.get('#amount').type(250) //da um imput no valor
        cy.get('#date').type("2024-09-27") //yyy-mm-dd
        cy.get('button').click() //clica no botão salvar
    });
});