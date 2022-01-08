import landingPage from "../pages/landingPage";
import locators from "../utils/locators";

describe("My Wishlist", function () {
  before(async function () {
    await landingPage.open();
  });

  it("Check the title and url of the Landing Page", async function () {
    const landingpage = await browser.getUrlAndTitle();
    expect(landingpage.title).to.equal(landingPageTitle);
    expect(landingpage.url).to.contains(baseUrl);
  });
});
it('My Wishlist', async () => {
  await CartPage.selectprintedDress();
  await CartPage.addItemToCart();

  await expect(CartPage.successMessage).toHaveTextContaining(
    'Your shopping cart contains:'    
  );
  await LoginPage.verifyLogout();
  await expect($('#SubmitLogin')).toBeExisting();
 });