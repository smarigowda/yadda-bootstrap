/**
 * Copyright 2012 Shazam Entertainment Limited
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * 
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var assert = require('selenium-webdriver/testing/assert');

var Steps = {
	using: function(library, ctx) {
		library.given("I am on google", function(next) {
			ctx.driver.get("http://www.google.co.uk")
			.then(function() {
				next();
			});
		});

		library.when("I search for $query", function(query, next) {
			ctx.driver.findElement(webdriver.By.id("lst-ib")).sendKeys(query);
			ctx.driver.findElement(webdriver.By.name("btnG")).click().then(function() {
				next();
			});
		});

		library.then("I should see the yadda github in the results", function(next) {

			var getText = function(text) { console.log(text)};
			
			var WebElement = ctx.driver.findElement(By.className("_Rm"));
			console.log(WebElement.getText().then(getText))
			// console.log(WebElement);
			// WebElements.then(function(x) { x.map(function(d) { console.log(d.then(function(el) { el.getText()}))})});
			// ctx.driver.findElements(By.className("_Rm")).getText().then(function(text) {
			// 	console.log(text);
			// 	// assert(text).contains("https://github.com/acuminous/");
				next();
			// });
		});
	}
};

exports.steps = Steps;
