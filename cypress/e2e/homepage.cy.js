describe("Homepage Smoke Test", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("/");
  });

  it("should load the homepage", () => {
    cy.url().should("include", "/");
  });

  it("should render something on the page", () => {
    cy.get("body").should("not.be.empty");
  });
});
