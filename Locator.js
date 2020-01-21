function locator() {
	this.term=element(by.xpath("//div[@class='producttext'][contains(text(),'Term')]"));
	this.gender=element(by.css("a[ng-class='femaleclass']"));
	this.smoking=element(by.xpath("//a[contains(text(),'Yes')]"));
	this.income=element(by.xpath("//input[@id='input-17']"));
	this.date=element(by.xpath("//input[@id='Tel13']"));
	this.month=element(by.xpath("//input[@id='Tel14']"));
	this.year=element(by.xpath("//input[@id='Tel15']"));
	this.citi=element(by.xpath("//input[@id='fl-input-19']"));
	this.mobNumber=element(by.id("input_20"));
	this.getLiveQuotes=element(by.css("span[ng-disabled='$parent.showbtntermloader']"));
	this.closePop=element(by.xpath("//span[contains(text(),'Skip')]"));
	this.selectPlan=element(by.xpath("(//button[@id='imgbtntermbuynow'])[4]"));
	
//---------About You----------------
	
	this.name=element(by.model("$parent.username"));
	this.email=element(by.xpath("(//input[@ng-model='$parent.useremail'])[3]"));
	this.pincode=element(by.model("$parent.corrpincodecity"));
	this.city=element(by.xpath("//md-select[@placeholder='Select City']"));
	this.submit=element(by.xpath("(//span[text()='Submit'])[1]"));
	this.qualification=element(by.xpath("//label[text()='Select Qualification']/..//input[@placeholder='Select Qualification']"));
	this.occ=element(by.css("md-select[aria-label='Select Occupation']"));
	this.sal=element(by.xpath("//div[text()='Salaried']"));
	this.save=element(by.css("span[ng-disabled='basicDetailsLoader']"));
	this.payment=element(by.xpath("(//span[@ng-disabled='alldetailsLoader'])[1]"));
	
//------Payment with credit card with monthly mode---------------
	
	this.credit=element(by.xpath("//div[contains(@class,'newcontarea col-md-9 col-sm-12 col-xs-12')]//div[7]//section[2]//div[1]//div[1]//div[1]//div[1]//div[2]//div[2]//div[1]//div[1]//button[1]"));
	this.pay=element(by.xpath("(//span[text()='Continue'])[5]"));
	this.cardNumber=element(by.xpath("(//input[@name='inputCardNo'])[3]"));
	this.expiry=element(by.xpath("(//input[@name='cardExpiry'])[3]"));
	this.NameOnCard=element(by.xpath("(//input[@name='inputNameOnCard'])[3]"));
	this.cvv=element(by.xpath("(//input[@name='cvvCode'])[3]"));
	this.confirmPay=element(by.xpath("(//button[@id='btnCards_Submit'])[2]"));
	
	this.getURL = function() {
		var url = 'https://quotes.easypolicy.com/';
		browser.get(url);
	}
	
}

module.exports= new locator();