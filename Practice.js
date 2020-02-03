describe('qaclick', function() {
	
	var d = require("./data.js");
	var using = require('jasmine-data-provider');
	
	
	function selectItem(product) {
		element.all(by.tagName("app-card")).each(function(item) {
			item.element(by.css("h4 a")).getText().then(function (text) {
				if (text == product) {
					item.element(by.css("button[class='btn btn-info']")).click();
				}
			})
		})
	}
	
	  beforeEach(function() {
			var url = 'https://qaclickacademy.github.io/protocommerce/';
			browser.get(url);
		  });
	  //data stores actual data
	  //description stores sub object name
	  //for every iteration one data set is picked
	  
	  using(d.datadriven, function (data, description) {
		  
		  it('Automate website:' +description, function () {
			 
				element(by.name("name")).sendKeys(data.name);
				element(by.name("email")).sendKeys(data.email);
				element(by.id("exampleInputPassword1")).sendKeys(data.pass);
				element(by.id("exampleCheck1")).click();
				element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
				element.all(by.name("inlineRadioOptions")).first().click();
				element(by.buttonText("Submit")).click().then(function () {
					element(by.css("div[class*='success']")).getText().then(function(text) {
						console.log(text);
					})
				})
				element(by.name("name")).clear();
				element(by.name("name")).sendKeys("M").then(function() {
					element(by.css("div[class='alert alert-danger']")).getText().then(function(text) {
						console.log(text);
					})
				})
				element(by.linkText("Shop")).click();
				selectItem("iphone X");
				selectItem("Nokia Edge");
				selectItem("Samsung Note 8");
				selectItem("Blackberry");
				
				element(by.partialLinkText("Checkout")).getText().then(function(text) {
					console.log(text);
					var res=text.split("(");
					expect(res[1].trim().charAt(0)).toBe("4");
				})
			})
	       
	});
	
	
	
	 afterEach(function() {
		 console.log("Script is successfuly run")
		   browser.close()
		  });

})