describe("My First Test", () => {
  it("click the link", () => {
    cy.visit("http://127.0.0.1:4500/");

    cy.contains("+").click();
    cy.url().should("include", "/#");

    cy.get(".count-display").type;
  });
});

describe("UI counter Test", () => {
  //생성시 버튼과 초기값(10)을 렌더링 한다.
  it("생성시 버튼과 초기값(10) 렌더링", () => {
    cy.visit("http://127.0.0.1:4500/");

    cy.get(".minus-button");
    cy.get(".plus-button");
    cy.get(".count-display").should("have.value", 10);
  });

  //+버튼 클릭 시 count가 1증가한다.
  it("+버튼 클릭 시 count가 1증가", () => {
    cy.get(".plus-button").click();
    cy.get(".count-display").should("have.value", 11);
  });

  //-버튼 클릭 시 count가 1감소한다.
  it("-버튼 클릭 시 count가 1감소", () => {
    cy.get(".minus-button").click();
    cy.get(".count-display").should("have.value", 10);
  });

  //+버튼을 눌렀을 때 count가 12가 넘는 경우 더이상 증가하지 못한다.
  it("+버튼을 눌렀을 때 count가 12가 넘는 경우 더이상 증가하지 못함", () => {
    cy.get(".plus-button").click();
    cy.get(".plus-button").click();
    cy.get(".count-display").should("have.value", 12);
  });

  //-버튼을 눌렀을 때 count는 8보다 작아지는 경우 감소하지 못한다.
  it("-버튼을 눌렀을 때 count는 8보다 작아지는 경우 감소하지 못함", () => {
    cy.get(".minus-button").click();
    cy.get(".minus-button").click();
    cy.get(".minus-button").click();
    cy.get(".minus-button").click();
    cy.get(".count-display").should("have.value", 8);
  });
});
