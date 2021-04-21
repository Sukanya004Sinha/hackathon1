const puppeteer = require("puppeteer");
let id = "sukanyasinha7776@gmail.com";
let pass = "sukanya@7905";
let ctab;
async function main() {
  let browser = puppeteer.launch({
    headless: false,
    defaultViewport: false,
    args: ["--start-maximized"]
  });
  let pages = await (await browser).pages();
  ctab = pages[0];
  await ctab.goto("https://www.instagram.com/");
  await ctab.waitForSelector("input[name='username']", { visible: true });
  await ctab.type("input[name='username']", id);
  await ctab.type("input[type='password']", pass);
  await ctab.click("button[type='submit']");
  await ctab.waitForSelector("svg[aria-label='Activity Feed']", { visible: true });
  await ctab.click("svg[aria-label='Activity Feed']");
  await ctab.waitForSelector("._7UhW9.xLCgt.MMzan._0PwGv.uL8Hv.M8ipN", { visible: true });
  await ctab.click("._7UhW9.xLCgt.MMzan._0PwGv.uL8Hv.M8ipN");
  
  let alltabsarr = []
  let followrequest = await ctab.$$(".FPmhX.notranslate.yrJyr");
  for (let i in followrequest) {
    let followurl = await ctab.evaluate(function (ins) {
      return ins.getAttribute("href");
    }, followrequest[i]);
    alltabsarr.push(followurl);
  }

  let followeraccept = await ctab.$$(".iTMfC button");
  for (let i = 0; i < followeraccept.length; i++) {
    if (i % 2 == 0) {
      await followeraccept[i].click({ delay: 1000 });
    }
  }
  for (let i = 0; i < alltabsarr.length; i++) {
    await autoLike("https://www.instagram.com" + alltabsarr[i]);
  }

}
async function autoLike(url) {
  await ctab.goto(url);
  await ctab.waitForSelector(".g47SY", { visible: true });
  let PrfileNumbers = await ctab.$$(".g47SY");
  let TotalPost = await ctab.evaluate(function (ins) {
    return ins.textContent;
  }, PrfileNumbers[0]);

  let j = 1;
  for (let i = 0; i < TotalPost; i++) {
    await ctab.waitForSelector("._9AhH0", { visible: true });
    await ctab.click("._9AhH0");
    await ctab.waitForSelector(".fr66n", { visible: true });
    await ctab.click(".fr66n");
    await ctab.screenshot({
      path: `./screenshots/SS+ request_${j + "of" + TotalPost}.jpeg`
    }),{delay:500};
    if (i == TotalPost - 1) {
      await ctab.waitForSelector(".wpO6b .QBdPU ._8-yf5", { visible: true });
      let close = await ctab.$$(".wpO6b .QBdPU ._8-yf5");
      await close[7].click();
    } else {
      await ctab.click("._65Bje.coreSpriteRightPaginationArrow", { delay: 1000 });
    }
    j++;

  }
}
main();