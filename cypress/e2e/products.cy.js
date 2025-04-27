import ProductsPage from '../support/pages/ProductsPage';

describe('Product Browsing and Filtering', () => {
  it('should filter products by category and verify details', () => {
    ProductsPage.visit();
    ProductsPage.filterByCategory();
    ProductsPage.verifyFilteredProducts();
    ProductsPage.viewFirstProductAndVerifyDetails();
  });
});
