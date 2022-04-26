
const puppeteer=require("puppeteer");
let cpage;//to get first page 
const browserPro=puppeteer.launch(
    {headless:false,
    defaultViewport:null,
    slowMo:200,
args:["--start-maximized" ]}) //by default puppeter is headless means will not show browser
browserPro.then((browserContext)=>{//browserContext will browser
    return browserContext.pages();//will return array of pages 
}).then((pages)=>{
    cpage=pages[0];

    return cpage.goto("http://www.google.com") ;//this will call google and return promise
}
).then(()=>{
    let load=cpage.waitForSelector('input[type="text"]',{visible:true});//wait for selector to load
    return load;
})
.then(()=>{
    let load=cpage.type('input[type="text"]',"pepcoding");//will write on that input 
    return load;
}).then(()=>{
    let pressEnter=cpage.keyboard.press("Enter");//will press enter
    return pressEnter;
})
.then(()=>{
    let load=cpage.waitForSelector(".LC20lb.MBeuO.DKV0Md",{visible:true});//wait for selector to load
    return load;
})
.then(()=>{
    let load=cpage.click(".LC20lb.MBeuO.DKV0Md");//will write on that input 
    return load;
})
.then(()=>{
    let load=cpage.waitForSelector(".close",{visible:true});//wait for selector to load
    return load;
})
.then(()=>{
    let load=cpage.click(".close");//will click to close 
    return load;
})
