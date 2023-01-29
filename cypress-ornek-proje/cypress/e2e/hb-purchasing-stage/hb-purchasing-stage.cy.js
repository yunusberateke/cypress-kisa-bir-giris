import CONST from "./constants";

const goToBestOfTodayPage = () => cy.visit(CONST.URLS.BestOfToday, CONST.DEFAULT_HEADER);
const acceptCookieButton = () => cy.get(CONST.COMPONENTS_PATHS.acceptCookieId);
const firstAddToCartButton = ()=> cy.get('button').first()

describe("Günün teklifinden bir ürün sepete ekleme", () => {
  it("HB Günün Teklifi Sayfasına Git ve İlk ürünü sepete ekleme", () => {
    goToBestOfTodayPage()
    acceptCookieButton().click()
    firstAddToCartButton().click()
  });
});
