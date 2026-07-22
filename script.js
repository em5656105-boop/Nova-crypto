// ===============================
// NOVA CRYPTO
// EMAILJS INITIALIZATION
// ===============================

emailjs.init({
    publicKey: "SMIll1sq8cBbCzskR"
});

// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

contactForm.addEventListener("submit", function(e){

e.preventDefault();

const params = {

name: document.getElementById("name").value,

email: document.getElementById("email").value,

subject: "Nova Crypto Contact",

message: document.getElementById("message").value

};

emailjs.send(
"service_hq3uofs",
"template_ixlmcgg",
params
)

.then(function(){

alert("✅ Message sent successfully.");

contactForm.reset();

})

.catch(function(error){

alert("❌ Failed to send message.");

console.log(error);

});

});

}

// ===============================
// SUBSCRIBE FORM
// ===============================

const subscribeForm = document.getElementById("subscribeForm");

if(subscribeForm){

subscribeForm.addEventListener("submit",function(e){

e.preventDefault();

const email = document.getElementById("subscriberEmail").value;

emailjs.send(

"service_hq3uofs",

"template_ixlmcgg",

{

subscriber: email,

subject:"Newsletter Subscription",

message:"A new visitor subscribed to Nova Crypto."

}

)

.then(function(){

document.getElementById("subscribeMessage").innerHTML="✅ Subscription Successful";

subscribeForm.reset();

})

.catch(function(){

document.getElementById("subscribeMessage").innerHTML="❌ Subscription Failed";

});

});

}// ===============================
// SUPPORT BUTTON
// ===============================

const supportBtn = document.getElementById("supportBtn");
const supportBtn2 = document.getElementById("supportBtn2");

function sendSupport(){

const issue = prompt("Describe your issue:");

if(!issue) return;

emailjs.send(
"service_hq3uofs",
"template_ixlmcgg",
{
name:"Support Request",
email:"support@novacrypto.com",
subject:"Support Request",
message:issue
}
)

.then(()=>{
alert("✅ Support request sent successfully.");
})

.catch(()=>{
alert("❌ Failed to send support request.");
});

}

if(supportBtn){
supportBtn.addEventListener("click",sendSupport);
}

if(supportBtn2){
supportBtn2.addEventListener("click",sendSupport);
}

// ===============================
// COPY USDT WALLET
// ===============================

const walletAddress =
"0xf17deEB3eE99E3CFbDEbb2A5ddb612aDaE8d1D5C";

const copyBtn = document.getElementById("copyWallet");

if(copyBtn){

copyBtn.addEventListener("click",()=>{

navigator.clipboard.writeText(walletAddress);

alert("✅ Wallet address copied.");

});

}

// ===============================
// INVESTMENT FORM
// ===============================

const investForm = document.getElementById("investForm");

if(investForm){

investForm.addEventListener("submit",function(e){

e.preventDefault();

const amount=document.getElementById("amount").value;

const txid=document.getElementById("txid").value;

emailjs.send(
"service_hq3uofs",
"template_ixlmcgg",
{

name:"Investment",

email:"investor@novacrypto.com",

subject:"New Investment",

amount:amount,

wallet:walletAddress,

txid:txid,

message:
"New investment request received."

}

)

.then(()=>{

alert("✅ Investment submitted successfully.");

investForm.reset();

})

.catch(()=>{

alert("❌ Failed to submit investment.");

});

});

}

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

console.log("✅ Nova Crypto Loaded Successfully");