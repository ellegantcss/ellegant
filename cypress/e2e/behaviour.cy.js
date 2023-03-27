/// <reference types="cypress" />

describe('Check if all components works as expected', () => {
  beforeEach(() => {
    cy.visit('./cypress/e2e/index.html');
  });

  it('The toggler shows up after clicking the button', () => {
    cy.get('#togglerTarget').should('not.be.visible');
    cy.get('#toggler')
      .invoke('attr', 'aria-pressed')
      .should('eq', 'false');

    cy.contains('Open toggler').click();
    cy.get('#togglerTarget').should('be.visible');
    cy.get('#toggler')
    .invoke('attr', 'aria-pressed')
    .should('eq', 'true');

    cy.contains('Open toggler').click();
    cy.get('#togglerTarget').should('not.be.visible');
    cy.get('#toggler')
      .invoke('attr', 'aria-pressed')
      .should('eq', 'false');
  });

  it('The switcher can change the visible component', () => {
    cy.get('#switcher label[data-nth="1"]')
      .invoke('attr', 'aria-checked')
      .should('eq', 'true');
      cy.get('#switcher label[data-nth="2"]')
      .invoke('attr', 'aria-checked')
      .should('eq', 'false');
    cy.get('#switcher .elle-target[data-nth="1"]').should('be.visible');
    cy.get('#switcher .elle-target[data-nth="2"]').should('not.be.visible');
    cy.get('#switcher .elle-target[data-nth="3"]').should('not.be.visible');
    cy.get('#switcher .elle-target[data-nth="4"]').should('not.be.visible');

    cy.contains('Show 2').click();
    cy.get('#switcher .elle-target[data-nth="2"]').should('be.visible');
    cy.get('#switcher .elle-target[data-nth="1"]').should('not.be.visible');
    cy.get('#switcher label[data-nth="1"]')
      .invoke('attr', 'aria-checked')
      .should('eq', 'false');
    cy.get('#switcher label[data-nth="2"]')
      .invoke('attr', 'aria-checked')
      .should('eq', 'true');

    cy.contains('Show 3').click();
    cy.get('#switcher .elle-target[data-nth="3"]').should('be.visible');
    cy.get('#switcher .elle-target[data-nth="1"]').should('not.be.visible');
    cy.get('#switcher .elle-target[data-nth="2"]').should('not.be.visible');
    cy.get('#switcher label[data-nth="1"]')
      .invoke('attr', 'aria-checked')
      .should('eq', 'false');
    cy.get('#switcher label[data-nth="2"]')
      .invoke('attr', 'aria-checked')
      .should('eq', 'false');
    cy.get('#switcher label[data-nth="3"]')
      .invoke('attr', 'aria-checked')
      .should('eq', 'true');
  });

  it('The menu shows up after clicking the button', () => {
    cy.get('.elle-menu').should('not.be.visible');
    cy.get('label[for="myMenu"]')
      .invoke('attr', 'aria-pressed')
      .should('eq', 'false');

    cy.contains('Open ►').click();
    cy.get('.elle-menu').should('be.visible');
    cy.get('label[for="myMenu"]')
      .invoke('attr', 'aria-pressed')
      .should('eq', 'true');

    cy.get('.elle-menu label[for="myMenu"]').first().click();
    cy.get('.elle-menu').should('not.be.visible');
    cy.get('label[for="myMenu"]')
      .invoke('attr', 'aria-pressed')
      .should('eq', 'false');
  });

  it('The modal shows up after clicking the button', () => {
    cy.get('.elle-label[for="myModal"]').first()
      .invoke('attr', 'aria-pressed')
      .should('eq', 'false');
    cy.get('.elle-modal').should('not.be.visible');
    cy.contains('Show modal').click();
    cy.get('.elle-label[for="myModal"]').first()
      .invoke('attr', 'aria-pressed')
      .should('eq', 'true');
    cy.get('.elle-modal').should('be.visible');

    cy.get('.elle-modal label[for="myModal"]').first().click();
    cy.get('.elle-label[for="myModal"]').first()
      .invoke('attr', 'aria-pressed')
      .should('eq', 'false');
    cy.get('.elle-modal').should('not.be.visible');
  });
})
