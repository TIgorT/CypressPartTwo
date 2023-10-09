import selector from "../fixtures/selectors";
import information from "../fixtures/inputData";
describe("Tests for admin authorization in the application go to the cinema", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });

  it("Login to the admin panel using valid data", () => {
    cy.authorization(information.validLogin, information.validPassword);
    cy.get(selector.hallsManagement).should("contain", "Управление залами");
    cy.contains("Управление залами").should("be.visible");
    // cy.get(selector.configuration).should("contain", "Конфигурация залов");
    // cy.get(selector.priceConfiguration).should("contain", "Конфигурация цен");
    // cy.get(selector.sessionGrid).should("contain", "Сетка сеансов");
    // cy.get(selector.openSales).should("contain", "Открыть продажи");
  });

  it("Login to the admin panel using invalid data", () => {
    cy.authorization(information.invalidLogin, information.invalidPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });

  it("Login to the admin panel using a valid email and invalid password", () => {
    cy.authorization(information.validLogin, information.invalidLogin);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });

  it("Login to the admin panel using an invalid email and a valid password", () => {
    cy.authorization(information.invalidLogin, information.validPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });

  it("Login to the admin panel using empty email and password fields", () => {
    cy.authorization(null, null);
    cy.get(selector.emailField).then((elements) => {
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });
});
