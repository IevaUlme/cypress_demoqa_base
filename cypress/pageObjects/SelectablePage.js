import BasePage from "./BasePage";

class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get clickButtons() {
    return cy.get("#verticalListContainer>li");
  }
  static get tabClick() {
    return cy.get("#demo-tab-grid");
  }
  static get numb_click() {
    return cy.get("#demo-tabpane-grid");
  }
}

export default SelectablePage;