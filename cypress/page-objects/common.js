const common = {
  loadingGoodReads,
}

function loadingGoodReads() {
  cy.contains('Loading books from Goodreads...').should('not.exist')
}

export default common
