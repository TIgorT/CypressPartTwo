import selector from "../fixtures/selectors";
import information from "../fixtures/inputData";

describe("Booking a movie in an accessible hall, the name of which you get from the admin panel", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });

  it("Booking a movie using data from the admin panel", () => {
    cy.authorization(information.validLogin, information.validPassword);
    cy.get(selector.movieTitles)
      .eq(4)
      .then(($title) => {
        cy.visit("/");
        cy.get(selector.day).click();
        cy.get(selector.film)
          .contains($title.text())
          .parent()
          .parent()
          .next()
          .next()
          .contains(information.sessionTime)
          .click();
        cy.choosePlace();
        cy.get(selector.button).click();
        cy.get(selector.proof).should("contain", "Вы выбрали билеты:");
        cy.contains("Вы выбрали билеты:").should("be.visible");
        cy.get(selector.button).should("contain", "Получить код бронирования");
        cy.contains("Получить код бронирования").should("be.visible");
        cy.get(selector.button).should("not.be.disabled");
      });
  });
});
