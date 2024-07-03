
let banner = document.getElementById("headshot");
let about = document.getElementById("about");
let tech = document.getElementById("tech");
let aspirations = document.getElementById("aspirations");
let portfolio = document.getElementById("portfolio");
let contact = document.getElementById("contact");
let notif = document.querySelector("#popUp");
let dismiss = document.getElementById("alertDismiss");

let LinkedIn = document.getElementById("LinkedIn");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let linked;
let number;
let address

let exit = document.getElementById("exit");

banner.addEventListener("mouseover", function()
{
    headshot.style.border="none";
    headshot.style.width="71.5%";
})
banner.addEventListener("mouseout", function()
{
    headshot.style.width="70%";
    headshot.style.borderLeft="white solid 10px";
    headshot.style.borderRight="white solid 10px";
    headshot.style.borderBottom="white solid 10px";
})
about.addEventListener("click", function()
{
    window.scrollTo(0,1500);
})
tech.addEventListener("click", function()
{
    window.scrollTo(0,2100);
})
aspirations.addEventListener("click", function()
{
    window.scrollTo(0,2350);
})
portfolio.addEventListener("click", function()
{
    window.scrollTo(0,2550);
})
contact.addEventListener("click", function()
{
    notif.style.display="block";
})
dismiss.addEventListener("click", function()
{
    notif.style.display="none";
    linked = LinkedIn.value
    number = phone.value;
    address = email.value;
    window.open('mailto:dallmanjake399@gmail.com?subject=Get In Contact &body='+"LinkedIn: "+linked+" Phone: "+number+" Address: "+address);
})
exit.addEventListener("click", function()
{
    notif.style.display="none";
    linked = LinkedIn.value
    number = phone.value;
    address = email.value;
})

