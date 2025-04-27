class ProductsPage {
    visit() {
      cy.visit('https://automationexercise.com/products');
    }
  
    filterByCategory() {
      cy.get('.panel-group.category-products')
        .contains('Women')
        .click();
  
      cy.get('a[href="/category_products/1"]')
        .click();
    }
  
    verifyFilteredProducts() {
      cy.get('h2.title.text-center')
        .should('be.visible')
        .and('contain', 'Women - Dress Products');
  
      cy.get('.features_items .col-sm-4')
        .should('have.length.greaterThan', 0);
    }
  
    viewFirstProductAndVerifyDetails() {
      cy.get('.features_items .col-sm-4').first().find('a').contains('View Product').click();
      
        // Now verify Product Details
        cy.get('.product-information').within(() => {
          cy.get('h2').should('be.visible').and('not.be.empty');        // Product Name
          //cy.get('.price').should('be.visible').and('not.be.empty');     // Price
          cy.contains('Availability').should('be.visible');             // Availability
        });
    }
}
export default new ProductsPage();