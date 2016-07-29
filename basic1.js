var assert = require('chai').assert,
    expect = require('chai').expect,
	should = require('chai').should(),
    test = require('selenium-webdriver/testing'),
    testSec = require('selenium-webdriver/testing'),
    //until = require('selenium-webdriver'),
    webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
	firefox = require('selenium-webdriver/firefox'),
    //path = require('chromedriver').path,
    //service = new chrome.ServiceBuilder(path).build(),
	chai = require('chai'),
	functions = require('./functions'),
    driver;

test.describe('First dir test', function(done) {
	
    this.timeout(30000);

    function waitingForLoad(){
        driver.findElement(webdriver.By.xpath("//div[@class='fpBlock2']")).isDisplayed().then(function (result) {
            if (result === true) {
                waitingForLoad();
            }
        }).
            then(null, function(err) {
                console.log(err);
            });
    };
	
	    function waitForLoad(){
        driver.findElement(webdriver.By.xpath("//div[@class='fpBlock2']")).isDisplayed().then(function (result) {
            if (result === true) {
                console.log ("great job, idiot");
            };
        });
    };
	
		test.before(function (done) {
        //new chrome instance (opnes new chrome window)
		driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
        //go to loan web
        driver.get("http://dir.bg");
        //wait till page is loaded
        driver.wait(function () {
            return driver.isElementPresent(webdriver.By.id("lenta-login"));
        }, 10000);
        //maximize the window
        driver.manage().window().maximize();
        done();
		});
	
	    test.after(function (done) {
        //close the browser instance
        driver.close();
        driver.quit();
        //service.stop();
        done();
		});
		
    test.it('Open Euro news', function(done) {
        //find and fill search field
        driver.findElement(webdriver.By.name("textfield")).then(function (search) {
            search.clear();
            search.sendKeys("euro 2016");
        });
        //click search button
        driver.findElement(webdriver.By.xpath("//input[@id='searchSubmit']")).click();

        //wait till result table is loaded
        driver.wait(function () {
            return driver.isElementPresent(webdriver.By.xpath("//div[@id='namereni']"));
        }, 10000);
        
        //open login page
        driver.findElement(webdriver.By.xpath("//div[@id='lenta-login']")).click();
		
        //wait till login page is loaded
        driver.wait(function () {
            return driver.isElementPresent(webdriver.By.xpath("//div[@class='fp_blockHeader2']"));
        }, 10000);
		
		//use the useless function
		//waitForLoad();
	
		//import the useless function
		functions.waitForLoad();
		
        //fill username
        driver.findElement(webdriver.By.name("username")).then(function (username) {
            username.clear();
            username.sendKeys("user");
        });
        //fill password
        driver.findElement(webdriver.By.name("password")).then(function (password) {
            password.clear();
            password.sendKeys("pass");
        });
        //click submit button
        driver.findElement(webdriver.By.xpath("//input[@id='submit_but']")).click();
		
        //add assertion
		chaiWebdriver = require('chai-webdriver-promised');
		chai.use(chaiWebdriver(driver));
		//var errorMessage = driver.findElement(webdriver.By.xpath("//div[@style='color:red']"));
		//var errorMessage = driver.findElement(webdriver.By.name('b'));

		//var errorMessage = driver.findElement(webdriver.By.xpath("//div[@style='red']"));
		//errorMessage.
		//assert.equal(errorMessage, 'dsfdsfds', 'found?');

	
		//assert('Грешно потребителско име или парола!');
		//assert.equal('.fpBlockBody2','bfdsklfj', "hmm, fine");
		
/* 		var errorMessage = driver.findElement(webdriver.By.xpath("//div[@class='fpBlockBody2']"));
		errorMessage.getAttribute('style').then(function(style) {
			assert.equal(style, 'red', "are you there?"); */
		
		//chai.expect('#site-container').dom.to.contain.text("bfdsklfj");
		//chai.expect('#site-container').dom.to.have.text("bfdsklfj");
		//chai.expect('//div[@class='fpBlockBody2']').dom.to.have.text("bfdsklfj"); >> not running at all
		//driver.get("http://dir.bg");
		//chai.expect("#div[@class='fpBlockBody2']").dom.to.have.text('Грешно потребителско име или парола!');
		//chai.expect('#site-container h1.heading').dom.to.have.text('fhdskbfdsklfjfdsfd');
  
		//expect(("//div[@class='fpBlockBody2']").to.equal('fhdskbfdsklfjfdsfd'), 'please work'); >> have in mind
  
	/* 	var errorMessage = driver.findElement(webdriver.By.xpath("//div[@class='fpBlockBody2']"));
		assert(errorMessage.contain.text('fhdsk bfdsklfj fdsfd'), 'please work'); */

	/* 	var errorMessage =  driver.findElement(webdriver.By.xpath("//div[@class='fpBlockBody2']")).text;
		assert(errorMessage, 'Грешно потребителско име или парола!', 'please work'); */
		
		
	
		driver.sleep(3000);

        done();
    });
});