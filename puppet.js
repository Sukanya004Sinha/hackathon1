// puppeteer is based fully based on automation
// puppeteer.launch through which  a headless browser
// jab bhi hm kaam krte rhenge to simply hm ye nhi chahyenge browser chlti rhe par dikhena hme taki glti se h uspar click na kr de.
//  javascript browser control 
// promise -> promise
//headless browser--> its simply a browser but by default its hidden its not visible launch karte time puppeteer.launch ko false karna pata hai.
// so hme headless wali proprty ko false kr  denge to simply hmara kaam ho jyega browser khulega aur hme dikega nhi
// callback nhi mangega browser ko open karne ka promise dega
// if we don't do headless: false then browser open to hoga  kaam hoga parwo visible nhi hoga
// js ke through ek browser control karta aur ek promise return karta hai.
const puppeteer = require("puppeteer");
//let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";



let browseropenP = puppeteer.launch({
    headless: false,
  //  defaultViewport:null,
  //  args:["--start-minimized", "--incognito"]

})
// fulfill  ->then --> work abhi nhi future me hoga
// ye hmse koi call back nhi mangega hme simply browser ko open krne ka promise dega
browseropenP
.then(function(browser){  // browser open hoga aur resolve hokar  browser ka ek instance  de dega
    // har ek function ke alg -2 promise honge
   console.log("browser opened");
    // let browserclosepromise = browser.close();
   /* browserclosepromise
    .then(function(){
        console.log("Browser closed");
    }) */ 
//})
let alltabsPromise =browser.pages();
return alltabsPromise;
})
/*= browser.pages();
 return alltabsPromise;
})
 // then gives a trust 
 // serial me ek k baad ek kaam krte jayenge to nesting ho jati hai nesting se bachne ka ek way hai
// jo promise hai uska wait krna par uski nesting nhi chaining krni hai
 //chaining krne ke liye uska then utside likh skte . lagakr aur uske liye hme return krna padega promise jiske iye then wait krega 
    */
   //alltabsPromise
 .then(function(tabs){
       let page = tabs[0];
       let gogglehomepageOpenPromise = page.goto("https://www.goggle.com");
       // goto us page par chale jao
      return  gogglehomepageOpenPromise
     //return  cricinfo;
   //)
  }) .then(function(){
           console.log("goggle home page opened");
       })
    
