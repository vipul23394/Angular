describe('ICICI Journey', function() {
	
	it('ICICI Proposal Journey', function() {
		var url = 'https://www.easypolicy.com/';
		browser.get(url);
		

		browser.manage().window().maximize();
		browser.sleep(5000);
		

		element(by.xpath("//div[@class='producttext'][contains(text(),'Term')]")).click();

		element(by.css("a[ng-class='femaleclass']")).click();
		element(by.xpath("//a[contains(text(),'Yes')]"))
				.click();
//		element(by.id('input-64')).click();
		element(by.xpath("//input[@id='input-17']")).sendKeys("10");
//		browser.sleep(5000);
		$$('.md-autocomplete-suggestions li').then(function(items) {
			expect(items.length).toBe(1);
			expect(items[0].getText()).toBe('10 Lacs');
			items[0].click();
		})
			
			element(by.xpath("//input[@id='Tel13']")).sendKeys("22");
			element(by.xpath("//input[@id='Tel14']")).sendKeys("07");
			element(by.xpath("//input[@id='Tel15']")).sendKeys("1988"); 
			
		    browser.actions().mouseMove(element(by.id("fl-input-19")).sendKeys("New delhi")).perform();
			browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		    browser.actions().sendKeys(protractor.Key.ENTER).perform();
		    element(by.id("input_20")).sendKeys("6789678967");
		    element(by.css("span[ng-disabled='$parent.showbtntermloader']")).click().then(function() {
		 //   element(by.model("$mdAutocompleteCtrl.scope.searchText")).sendKeys("110096");	
		    	 browser.sleep(10000);
		    browser.ignoreSynchronization = true
		    element(by.xpath("//span[contains(text(),'Skip')]")).click();
		    browser.sleep(3000);
		    element(by.css("span[ng-class='term1yearlypaymodeCss']")).click();
		    browser.executeScript('window.scrollBy(0, 600);').then(function() {
		    	element(by.xpath("(//button[@id='imgbtntermbuynow'])[10]")).click();
			})
			
		   
		    browser.sleep(5000);
		    // ----About You Page-------------
		   element(by.model("$parent.username")).sendKeys("Automation Testing");
		    element(by.xpath("(//input[@ng-model='$parent.useremail'])[3]")).sendKeys("vipul.pandey@easypolicy.com"); 
		    element(by.model("$parent.corrpincodecity")).sendKeys("110096");
		    browser.sleep(5000);
		    element(by.xpath("//md-select[@placeholder='Select City']")).click().then(function() {
		    	browser.sleep(5000);
		    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function() {
				browser.sleep(5000);
				element(by.xpath("(//span[text()='Submit'])[1]")).click();
				browser.sleep(5000);
				element(by.xpath("//label[text()='Select Qualification']/..//input[@placeholder='Select Qualification']")).sendKeys("Graduate");
				browser.sleep(2000);
				browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
			    browser.actions().sendKeys(protractor.Key.ENTER).perform();
				 element(by.css("md-select[aria-label='Select Occupation']")).click();
		    	 element(by.xpath("//div[text()='Salaried']")).click();	
		    	 browser.sleep(2000);
				    element(by.css("span[ng-disabled='basicDetailsLoader']")).click();
				    browser.sleep(2000);
				    element(by.xpath("(//span[@ng-disabled='alldetailsLoader'])[1]")).click();
				    browser.sleep(5000);
		    })
		    })
		    })
	})
})