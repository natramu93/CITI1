$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "This feature tests for positive and negative login scenarios",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 7868771381,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#This is comments"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am able to access magento web page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on user icon",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_am_able_to_access_magento_web_page()"
});
formatter.result({
  "duration": 35315966846,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_click_on_user_icon()"
});
formatter.result({
  "duration": 5511784519,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Passing multiple city into googlemaps",
  "description": "",
  "id": "login-feature;passing-multiple-city-into-googlemaps",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@maps"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am able to access maps web page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I click on directions button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I update the cities",
  "rows": [
    {
      "cells": [
        "chennai"
      ],
      "line": 33
    },
    {
      "cells": [
        "hyderabad"
      ],
      "line": 34
    },
    {
      "cells": [
        "kolkatta"
      ],
      "line": 35
    },
    {
      "cells": [
        "mumbai"
      ],
      "line": 36
    },
    {
      "cells": [
        "pune"
      ],
      "line": 37
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I should get the total distance as 2500 kms",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_am_able_to_access_maps_web_page()"
});
formatter.result({
  "duration": 244488971871,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027NATARAJAN\u0027, ip: \u0027192.168.0.32\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: driver.version: RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591088 (7b2b2dca23cca0..., userDataDir: C:\\Users\\USERDE~1.000\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:50217}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true, webdriver.remote.sessionid: 5a572f13c5ff75bf8888a8eb308...}\nSession ID: 5a572f13c5ff75bf8888a8eb308d6567\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:569)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\r\n\tat stepdefn.Steps.i_am_able_to_access_maps_web_page(Steps.java:89)\r\n\tat ✽.Given I am able to access maps web page(src/test/resources/Login.feature:30)\r\nCaused by: java.net.ConnectException: Failed to connect to /192.168.0.15:11191\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:242)\r\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:160)\r\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\r\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\r\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:105)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:833)\r\n\tat stepdefn.Steps.i_am_able_to_access_maps_web_page(Steps.java:89)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: java.net.ConnectException: Connection timed out: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:240)\r\n\t... 61 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.i_click_on_directions_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.i_update_the_cities(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2500",
      "offset": 35
    }
  ],
  "location": "Steps.i_should_get_the_total_distance_as_kms(int)"
});
formatter.result({
  "status": "skipped"
});
});