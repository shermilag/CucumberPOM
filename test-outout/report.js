$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/raghu/eclipse-workspace/CucumberPOM/src/main/java/com/qa/features/freecrm.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Application Test",
  "description": "",
  "id": "free-crm-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Free CRM Home Page Test",
  "description": "",
  "id": "free-crm-application-test;validate-free-crm-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user log into app",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate logged in username",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 7438316241,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 23282572,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 9114102163,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:60)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.forEachRemaining(Unknown Source)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(Unknown Source)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.base/java.util.stream.ReferencePipeline.collect(Unknown Source)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:475)\r\n\tat com.qa.pages.LoginPage.login(LoginPage.java:48)\r\n\tat com.qa.stepDefinitions.HomePageSteps.user_enters_username_and_password(HomePageSteps.java:34)\r\n\tat ✽.Then user log into app(C:/Users/raghu/eclipse-workspace/CucumberPOM/src/main/java/com/qa/features/freecrm.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageSteps.validate_home_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.validate_logged_in_username()"
});
formatter.result({
  "status": "skipped"
});
});