import SelectablePage from "../../pageObjects/SelectablePage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it("Filling in Text Boxes", () => {
      SelectablePage.clickButtons.contains("Cras justo odio").click()
      SelectablePage.clickButtons.contains("Morbi leo risus").click()
      SelectablePage.clickButtons.contains("Cras justo odio").should("have.class", "active")
      SelectablePage.clickButtons.contains("Morbi leo risus").should("have.class", "active")

      SelectablePage.tabClick.click()

      SelectablePage.numb_click.contains("Two").click()
      SelectablePage.numb_click.contains("Four").click()
      SelectablePage.numb_click.contains("Six").click()
      SelectablePage.numb_click.contains("Eight").click()
      SelectablePage.numb_click.contains("Two").should("have.class", "active")
      SelectablePage.numb_click.contains("Four").should("have.class", "active")
      SelectablePage.numb_click.contains("Six").should("have.class", "active")
      SelectablePage.numb_click.contains("Eight").should("have.class", "active")
    });
  });
});
