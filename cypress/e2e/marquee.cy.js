describe("Marquee Component", () => {
  beforeEach(() => {
    // step1: Visit local app before each test
    cy.visit("http://localhost:8080");
  });

  it("should display marquee content", () => {
    // step2: check marquee section exists
    cy.get('[data-cy="marquee-start"]').should("exist");

    // step3: Assert key parts of marquee are visible
    cy.get('[data-cy="eyebrow"]').should("be.visible");
    cy.get('[data-cy="headline"]').should("be.visible");
    cy.get('[data-cy="description"]').should("be.visible");
  });

  //it("should contain correct text in headline", () => {
  // can update to match actual headline in contentful data
  // cy.get('[data-cy="headline"]').should(
  //   "contain.text",
  //   "Get the perfect domain — even if it's not available."
  // );
  // });
});
