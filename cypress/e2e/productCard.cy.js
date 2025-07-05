describe("Product Card Section", () => {
  beforeEach(() => {
    // step1: Visit local app before each test
    cy.visit("http://localhost:8080");
    // step2: set viewport to 1920x1080 desktop
    cy.viewport(1920, 1080);
  });

  it("should render at least one product card", () => {
    cy.get('[data-cy="card"]').should("have.length.at.least", 1);
  });

  it("should display an image, headline, and description in each card", () => {
    cy.get('[data-cy="card"]').each(($card) => {
      cy.wrap($card).find('[data-cy="image"]').should("be.visible");
      cy.wrap($card).find('[data-cy="headline-string"]').should("not.be.empty");
      cy.wrap($card).find('[data-cy="description"]').should("not.be.empty");
    });
  });

  it("should display CTA button if ctaText and ctaUrl are provided", () => {
    cy.get('[data-cy="card"]').each(($card) => {
      cy.wrap($card).within(() => {
        cy.get('[data-cy="cta"]').should("exist");
      });
    });
  });
});
