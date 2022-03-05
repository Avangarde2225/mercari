/// <reference types="cypress" />

describe('Test Mercari Site using Cypress', ()=>{

    beforeEach(() => {
        cy.visit('/')
    })

    it('Verify the page', {tags:['smoke','regression']}, ()=>{
        cy.get('.Button-y431fn-0 > .Image-sc-172fqpb-1')
        cy.title().should("eq", "Mercari: Your Marketplace")
    })
    it('Search for Shirts', ()=>{
        cy.get('[data-testid=SearchInput]').type('Shirts')
        cy.get('[data-testid=SearchIcon] > svg').click().wait(2000)
        cy.url().should('include', 'Shirts')
        expect('[data-testid=SearchKeyword]').to.exist
        cy.contains('Shirts')

    })
   
})