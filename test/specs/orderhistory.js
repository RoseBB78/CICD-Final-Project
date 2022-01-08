import landingPage from "../pages/landingPage";

describe("Order History", function () {
  before(async function () {
    await landingPage.open();
  });

  it("Check the title and url of the Landing Page", async function () {
    const landingpage = await browser.getUrlAndTitle();
    expect(landingpage.title).to.equal(landingPageTitle);
    expect(landingpage.url).to.contains(baseUrl);
  });
  it('Add item to cart', async () => {
    await CartPage.selectblouse();
    await CartPage.addItemToCart();

    await expect(CartPage.successMessage).toHaveTextContaining(
      'Product successfully added to your shopping cart'
    );

    await CartPage.proceedToCheckout();
    await CartPage.clickPayByBankWire();
    await CartPage.confirmOrder();

    await expect(CartPage.confirmationMessage).toHaveTextContaining('ORDER CONFIRMATION');
    
    await LoginPage.verifyLogout();
    await expect($('#SubmitLogin')).toBeExisting();
  });
});