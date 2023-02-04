const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = 'https://getvolunteering.co.uk/opportunities?location=TW20+0EX';

    await page.goto(url);

    const titlesAndLinks = await page.evaluate(() => {
        const adverts = Array.from(document.querySelectorAll('.advert-title a'));
        return adverts.map(advert => {
            return {
                title: advert.textContent,
                link: advert.href
            };
        });
    });

    console.log(titlesAndLinks);

    await browser.close();
})();