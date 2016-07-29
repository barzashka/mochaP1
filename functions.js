var webdriver = require('selenium-webdriver'),
	chrome = require('selenium-webdriver/chrome'),
	driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();

exports.waitForLoad = function (){
    driver.get("http://my.dir.bg");
	driver.findElement(webdriver.By.xpath("//div[@class='fpBlock2']")).isDisplayed().then(function (result) {
        if (result === true) {
        console.log ("great job, idiot");
		} else {
				console.log ("no job, idiot");
				};
		driver.close();
        driver.quit();
        });
    };
	
