describe("Marquee Component", () => {
  it("should load homepage and display marquee", () => {
    cy.visit("http://localhost:8080/"); // can switch to use Live Netlify https://dazzling-kelpie-426d25.netlify.app/
    // step2: set viewport to 1920x1080 desktop
    cy.viewport(1920, 1080);

    // Assert headline and description to render
    cy.get('[data-cy="headline"]').should("be.visible");
    cy.get('[data-cy="description"]').should("be.visible");
  });
});
