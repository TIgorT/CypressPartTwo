import selector from "../../fixtures/selectors";

describe("Visibility of the main page of the site", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Application name", () => {
    cy.get(selector.title).should("contain", "Идёмвкино");
  });

  it("App Name Visibility", () => {
    cy.get(selector.title).should("be.visible");
  });

  it("The number of days displayed on the main page of the application", () => {
    cy.get(selector.days).should("have.length", 7);
  });

  it("Number of available movies", () => {
    cy.get(selector.film).should("have.length", 3);
  });

  it("The title of the first film", () => {
    cy.get(selector.filmFirst).should("contain", "Зверополис");
  });

  it("The title of the second film", () => {
    cy.get(selector.filmSecond).should("contain", "Терминатор-заржавел");
  });

  it("The title of the third film", () => {
    cy.get(selector.filmThird).should("contain", "Унесенные ветром");
  });
});
