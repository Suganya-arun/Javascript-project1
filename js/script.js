// var io="suganya";
const form = document.getElementById('form1');
form.addEventListener("submit", function (event)
{
     event.preventDefault();
const mailid= form.elements['emailid'];
let mail=mailid.value;
// console.log(mail);
const emailref=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(emailref.test(mail)==false)
{   
    console.log("inside function");
    document.querySelector("small").innerHTML="Please provide a valid email address";
    console.log(mailid);
     mailid.style.border="1px solid red";
     mailid.style.backgroundColor="transparent";
}
});