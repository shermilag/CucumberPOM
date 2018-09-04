package com.qa.runner;

	
	import org.junit.runner.RunWith;
    import cucumber.api.CucumberOptions;
    import cucumber.api.junit.Cucumber;

	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "C:\\Users\\raghu\\eclipse-workspace\\CucumberPOM\\src\\main\\java\\com\\qa\\features\\freecrm.feature", //the path of the feature files
			glue={"com\\qa\\stepDefinitions"},//the path of the step definition files
			plugin = {"pretty","html:test-outout"},
			monochrome = true,
			strict = true,
			dryRun = false
		    //tags = {"~@SmokeTest" , "~@RegressionTest", "~@End2End"} //~ is used as disable
				
			)

	public class TestRunner {

	}


