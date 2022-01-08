const assert = require("assert")
const loginPage = require("../../../pages/login/login.page")
const data = require("../../../resources/login/login")

describe("Automation practice login page", function() {
    before(function (){
      browser.url("/index.php?controller=authentication&back=my-account")
    }),
  
    it("must redirect user to my account page", function() {
      loginPage.fillForm(data.valid_credentials)
  
      assert.strictEqual(helper.getBrowserTitle(), data.valid_credentials.assertion_title)
      assert.strictEqual(helper.getPageHeader(), data.valid_credentials.assertion_page)

    });

    it('Navigating to Edit an user', async() => {
        await EditPage.goToEditPage('rballesterob@hotmail.com','020878');
        await expect(EditPage.messageSuccess.toBeDisplayed());
        
        helper.takeScreenshot("./logs/screenshot/", "valid_login.png")
    });
  });
  