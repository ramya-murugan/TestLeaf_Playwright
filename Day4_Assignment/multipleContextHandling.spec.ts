import {test,chromium,firefox} from '@playwright/test'

test('Launching Edge',async()=>{

    const browser = await chromium.launch({channel:"msedge",headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.redbus.in/')

    const edgePageTitle =  await page.title()
    console.log(edgePageTitle)
    const edgePageUrl = await page.url()
    console.log(edgePageUrl)

})

test('Launching Firefox',async()=>{

    const browser = await firefox.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.flipkart.com/')

    const firefoxPageTitle =  await page.title()
    console.log(firefoxPageTitle)
    const firefoxPageUrl = await page.url()
    console.log(firefoxPageUrl)

})