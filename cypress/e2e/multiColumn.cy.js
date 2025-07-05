describe("Multi-Column Section", () => {
  beforeEach(() => {
    // step1: Visit local app before each test
    cy.visit("http://localhost:8080");
    // step2: set viewport to 1920x1080 desktop
    cy.viewport(1920, 1080);
  });

  it("should render the multi-column section with at least 2 cards", () => {
    cy.get('[data-cy="multi-column-section"]').should("exist");
    cy.get('[data-cy="card"]').should("have.length.at.least", 2);
  });

  it("should display content in each card", () => {
    cy.get('[data-cy="card"]').each(($card) => {
      cy.wrap($card).should("be.visible");
      cy.wrap($card).find("h3").should("exist");
      cy.wrap($card).find("p").should("exist");
    });
  });
});
