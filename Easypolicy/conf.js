var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		framework: 'jasmine',
		seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['Practice.js'],
		allScriptsTimeout: 20000,
		capabilities :{
			browserName: 'firefox'
			
		},
		
		 jasmineNodeOpts: {
			    showColors: true,
			    defaultTimeoutInterval: 100000,
			    isVerbose: true
			  },
		
		 onPrepare: function(){
			  browser.manage().window().maximize();
			  jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			         savePath: './test/reports',
			         takeScreenshots: true,
			         takeScreenshotsOnlyOnFailures: true,
			         fixedScreenshotName: true,
			         cleanDestination: false,
			         showPassed: false,
			         fileName: 'EasypolicyReport',
			         fileNameSeparator: '_'
			  })
			  );
		 },
		 
	suites :
		{
		Smoke : ['Hdfc.js','ICICI.js']
		},
		 
		 jasmineNodeOpts: {
			    showColors: true, // Use colors in the command line report.
			  }
		};
