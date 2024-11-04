import {test, chromium} from '@playwright/test'

test('Launching Salesforce', async()=>{

    //To launch a browser in non-headless mode
    const browser = await chromium.launch({headless:false})
    
    //To launch a new context
    const context = await browser.newContext()

    //To launch a new page
    const page = await context.newPage()

    // To load the salesforce page
    await page.goto("https://login.salesforce.com/")

    // To find the username field and enter the user name
    await page.locator('#username').fill('majay3574@gmail.com')

    // To find the password field and enter the password
    await page.locator('#password').fill('Ajaymichael@123')

    //To click the login button to login to salesforce page
    await page.locator('#Login').click()

    //To explicitely given a waiting time to load the page
    await page.waitForTimeout(10000)

    //To get the page title and storing it in a variable
    const pageTitle =await page.title()
    //To print the pagetitle
    console.log(pageTitle)

    //To get a url of the page and storing it in a variable
    const getURL =await page.url()
    //To print the Url of the page
    console.log(getURL)

    //To close the browser
    browser.close()

})