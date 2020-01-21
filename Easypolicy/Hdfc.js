describe('HDFC Journey', function() {
	var loc = require("./Locator.js");
	
	it('HDFC Proposal Journey', function() {
		loc.getURL();
		
		browser.sleep(5000);
        loc.term.click();
		loc.gender.click();
		loc.smoking.click();
		loc.income.sendKeys("10");
		$$('.md-autocomplete-suggestions li').then(function(items) {
			expect(items.length).toBe(1);
			expect(items[0].getText()).toBe('10 Lacs');
			items[0].click();
		})
			
			loc.date.sendKeys("22");
			loc.month.sendKeys("07");
			loc.year.sendKeys("1988"); 
		
		    browser.actions().mouseMove(loc.citi.sendKeys("New delhi")).perform();
		    element(by.xpath("//span[text()='New Delhi']")).click();
//		    $$('.md-autocomplete-suggestions li').then(function(items) {
//				expect(items.length).toBe(1);
//				expect(items[0].getText()).toBe('New Delhi, Delhi');
//				items[0].click();
//		    })
//			browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//		    browser.actions().sendKeys(protractor.Key.ENTER).perform();
		    
		   
		    loc.mobNumber.sendKeys("6789678967");
		    loc.getLiveQuotes.click().then(function() {			
		    	 browser.sleep(10000);
		    browser.ignoreSynchronization = true
		    loc.closePop.click();
		    loc.selectPlan.click();
		    browser.sleep(5000);
		    
		    // ----About You Page-------------
		    loc.name.sendKeys("Automation");
		    loc.email.sendKeys("vipul.pandey@easypolicy.com"); 
		    loc.pincode.sendKeys("110096");
		    browser.sleep(5000);
		    loc.city.click().then(function() {
		    	browser.sleep(5000);
		    	element.all(by.repeater("item in Pincodelist")).each(function(item) {
					var ele=item.element(by.css("div:nth-child(1)"));
					browser.sleep(2000);
					browser.actions().mouseMove(ele).click().perform();

				browser.sleep(5000);
				loc.submit.click();
				browser.sleep(5000);
				loc.qualification.sendKeys("B Com").then(function() {
					element(by.css("md-autocomplete-parent-scope:nth-child(1)")).click();
				})
				browser.sleep(2000);
//				browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
//			    browser.actions().sendKeys(protractor.Key.ENTER).perform();
				  loc.occ.click();
			    	 loc.sal.click();
			    	 loc.save.click();
			    	 browser.sleep(2000);
			    	 loc.payment.click().then(function() {
			    		 browser.sleep(2000);
			    		 loc.credit.click();
			    		 loc.pay.click().then(function() {
								 browser.sleep(5000);
			    		 loc.cardNumber.sendKeys("4166464307296509");
			    		 loc.expiry.sendKeys("0223");
			    		 loc.NameOnCard.sendKeys("vipul pandey");
			    		 loc.cvv.sendKeys("467");
			    		 loc.confirmPay.click().then(function() {
								 browser.sleep(9000);
			    		 browser.getAllWindowHandles().then(function(handle) {
							browser.switchTo().window(handle[1]);
							browser.sleep(3000);
							element(by.xpath("//input[@id='txnAuthTypePswd']")).click();
							browser.sleep(5000);
						})
						})
			    	
			})			    	
		  })			    	 
		})		    		    
	  })
	})       
  })
})