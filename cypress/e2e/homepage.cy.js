describe("Homepage Smoke Test", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("/");
  });

  it("loads successfully", () => {
    cy.url().should("include", "/");
  });

  it("does not show fallback error", () => {
    cy.get('[data-cy="error"]').should("not.exist");
  });

  it("displays key sections", () => {
    cy.get('[data-cy="marquee"]').should("exist");
    cy.get('[data-cy="multi-column-section"]').should("exist");
    cy.get('[data-cy="card"]').should("have.length.at.least", 1);
  });
});
