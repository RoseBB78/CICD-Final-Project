module.exports = {
    //Locators
    waitforTimeout: 10000,
    baseUrl: "http://automationpractice.com/index.php",
    navigateUrl: "http://automationpractice.com/index.php",
    shoppingcart: "http://automationpractice.com/index.php?controller=order",
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    mochaTimeout: 60000,
    homePageImage: "div#header_logo",
    explicitWaitMS: 5000,
    landingPageTitle: "My Store",
    title: "My Store",
    fadedShortSleeveTshirts:
      "(//a[contains(text(),'Faded Short Sleeve T-shirts')])[1]",
    blouse: "(//a[contains(text(),'Blouse')])[2]",
    printedDress: "(//a[contains(text(),'Printed Dress')])[1]",
    printedDressTwo: "(//a[contains(text(),'Printed Dress')])[2]",
    printedSummerDress: "(//a[contains(text(),'Printed Summer Dress')])[1]",
    printedSummerDressTwo: "(//a[contains(text(),'Printed Summer Dress')])[2]",
    printedChiffonDress: "(//a[contains(text(),'Printed Chiffon Dress')])[1]",
    addToCartButton: "//button[@name='Submit']",
    elementText: "Add to cart",
    successMessage: "div.layer_cart_product.col-xs-12.col-md-6 > h2",
    cartAddedMessage: "//span[contains(text(),'There is 1 item in your cart.')]",
    closeBtn: "span.cross",
    itemCount: "div > a > span.ajax_cart_quantity.unvisible",
    priceCount: "div > a > span.ajax_cart_total.unvisible",
    productCount: "1",
    colourBlack: "//a[@name='Black']",
    colourOrange: "//a[@name='Orange']",
    colourBlue: "//a[@name='Blue']",
    colourYellow: "//a[@name='Yellow']",
    colourSelected: "//li[@class='selected']",
    quantityWanted: "//input[@id='quantity_wanted']",
    numberOfItems: "5",
    cart: "//b[contains(text(),'Cart')]",
    totalPrice: "//td[@id='total_product']",
    totalProductPrice: "$144.90",
    dressTitle: "//h1[contains(text(),'Printed Summer Dress')]",
    timeout: 5000,
  };