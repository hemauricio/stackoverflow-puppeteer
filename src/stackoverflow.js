// Importing email and password
const config = require("../secrets/secrets.js");

// Importing puppeteer
const puppeteer = require("puppeteer");

async function login(){
  /*
  I'm setting headless to false to visualize the process. It can be removed.
  It's very important to configure the slowMo, as it's not only useful
  for you to see what is going on, but also to not trigger the anti-abuse system,
  that way, human intervention won't be neccessary.
  */
  const browser = await puppeteer.launch({headless: false, slowMo: 50});

  const page = await browser.newPage();

  // Adjust the page to a somewhat decent size. Can be removed
  await page.setViewport({width: 1366, height: 768});

  await page.goto('https://stackoverflow.com/users/login', {waitUntil:'networkidle2'});

  // Just to ensure the email selector is already loaded
  await page.waitForSelector('#email');

	await page.focus("#email");

  // Typing the email fetched from the configuration file
	await page.keyboard.type(config.email);

	await page.focus("#password");

  // Typing the password fetched from the configuration file
	await page.keyboard.type(config.password);

	await page.click("#submit-button");

  // Waits 1.5 seconds to appreciate the result
  await page.waitFor(1500);
  
  await browser.close();
}

login();
