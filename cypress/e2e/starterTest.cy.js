describe("Marquee Component", () => {
  it("should load homepage and display marquee", () => {
    cy.visit("http://localhost:8080/"); // can switch to use Live Netlify https://dazzling-kelpie-426d25.netlify.app/

    // Assert headline and description to render
    cy.get('[data-cy="headline"]').should("be.visible");
    cy.get('[data-cy="description"]').should("be.visible");
  });
});
