
const abb1 = document.getElementById('abb1');
const abb2 = document.getElementById('abb2');
const abb3 = document.getElementById('abb3');
const abb4 = document.getElementById('abb4');
const abb5 = document.getElementById('abb5');
const abb6 = document.getElementById('abb6');
const abb7 = document.getElementById('abb7');
const abb8 = document.getElementById('abb8');
const abb9 = document.getElementById('abb9');
const abb10 = document.getElementById('abb10');

function toggle1(){
    var x = document.getElementById('abb1');
    if (x.style.display === "block"){
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function toggle2(){    
    var x = document.getElementById('abb2');
    if (x.style.display === "block"){
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function toggle3(){
    var x = document.getElementById('abb3');
    if (x.style.display === "block"){
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function toggle4(){
    var x = document.getElementById('abb4');
    if (x.style.display === "block"){
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function toggle5(){
    var x = document.getElementById('abb5');
    if (x.style.display === "block"){
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function toggle6(){
    var x = document.getElementById('abb6');
    if (x.style.display === "block"){
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function toggle7(){
    var x = document.getElementById('abb7');
    if (x.style.display === "block"){
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function toggle8(){
    var x = document.getElementById('abb8');
    if (x.style.display === "block"){
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function toggle9(){
    var x = document.getElementById('abb9');
    if (x.style.display === "block"){
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function toggle10(){
    var x = document.getElementById('abb10');
    if (x.style.display === "block"){
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}
function toggle(){
    var x = document.getElementById('form');
   
    if (x.style.display === "block"){
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
    x.scrollIntoView();
    
}
// getting elements by id and storing in variables

const form = document.getElementById('form');
const fullNameInput = document.getElementById('fullName');
const numberIdInput = document.getElementById('numberId');
const dob = document.getElementById('dob')
const mobileInput = document.getElementById('mobile');
const emailInput = document.getElementById('email');
const errorCcaptcha = document.getElementById('error-captcha');
const textBox = document.getElementById('textBox');
const checkbox2=document.getElementById('checkbox2');
const submit =document.getElementById('submitButton')
const fullNameRegex = /^[\u0621-\u064A\s0-9]+$/i;
const numberIdRegex = /^[0-1]{1}[0-4]{1}\d{9}$/;
const dobRegex = /^(0[1-9]|1\d|2\d|3[01])\-(0[1-9]|1[0-2])\-(19|20)\d{2}$/;
const mobileRegex = /^(09)\d{8}$/;
const emailRegex = /^\S+@\S+\.\S+$/;

/***********************************/
window.onload = function(){
    const url = new URL(window.location.href);
    var values = url.searchParams.getAll("values");
    
    var list = document.getElementById("list");
    var total = 0;
    values.forEach((v) => {

       
        var d = document.createElement("pre");
        list.appendChild(d);
        d.textContent = v.replace("%20","");
        var bb = "الاجار الشهري :".length;
        var price = v.substring(v.indexOf("الاجار الشهري :")+bb,v.indexOf("ل س")).replace(",","");
        console.log(price);
        total += Number(price);
    });
    var totalDoc = document.getElementById("totalValue");
    totalDoc.textContent = total;


}

/***************************************/

var shoppingForm =document.getElementById('shoppingForm');
var valuese =[];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateInputs()) {
        resetTheForm();

         var checkboxes = document.getElementsByName('item');
         for(var z = 0 ; z < checkboxes.length; z++){
         if (checkboxes[z].checked == true){
            valuese.push(checkboxes[z].value)
        }
    }
        var url = "";
        valuese.forEach((v) => {
            if(url.length != 0){
                url = url + "&";
            }
            url = url + "values=" + v;
        });
        window.open("ShoppingBasket.html?" + url, "_blank", "width=500,height=500");
        location.reload();
    }
    
}

);

/********************************************/



  //******************* SHOW ERROR MESSAGE *******************//
    const validateInput = (element, regex, lable) => {
    var error = '';
    if (!regex.test(element.value)) {
    error = lable + ' الذي قمت بإدخاله (' + element.value + ') ليس بالشكل الصحيح. \n من فضلك أصلحه';
    element.focus();
    element.select();
    }
    const hasError = error == '';
    const container = element.parentElement;
    
    container.querySelector('.error-text').innerText = error;
    container.classList.remove('success')
    container.classList.remove('error')
    container.classList.add(hasError ? 'error' : 'success');
    return hasError ? true : false;
    }

    //******************* FORM VALIDATION FUNCTION *******************//

    const validateInputs = () => {
    return validateInput(fullNameInput, fullNameRegex,'الاسم الكامل')
    && validateInput(numberIdInput, numberIdRegex, 'الرقم الوطني')
    && validateInput(dob, dobRegex, 'تاريخ الولادة ')
    && validateInput(mobileInput, mobileRegex, 'رقم الموبايل')
    && validateInput(emailInput, emailRegex, 'الايميل');
    
    }
    
    
        //******************* RESET THE FORM *******************//
        function resetTheForm() { 
        document.getElementById("fullName").value = '';
        document.getElementById("numberId").value = '';
        document.getElementById("dob").value = '';
        document.getElementById("mobile").value = '';
        document.getElementById("email").value = '';
        document.getElementById("textBox").value = '';
        } 



    //******************* CAPTCHA GENERATOR *******************/
//https://www.makeuseof.com/captcha-validation-html-css-javascript/

// document.querySelector() is used to select an element from the document using its ID

let captchaText = document.querySelector('#captcha');
var ctx = captchaText.getContext("2d");
ctx.font = "45px Roboto";
ctx.fillStyle = "#002035";


let userText = document.querySelector('#textBox');
let submitButton = document.querySelector('#submitButton');
let output = document.querySelector('#output');



// alphaNums contains the characters with which you want to create the CAPTCHA
let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let emptyArr = [];

// This loop generates a random string of 7 characters using alphaNums
// Further this string is displayed as a CAPTCHA
for (let i = 1; i <= 7; i++) {
emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
var c = emptyArr.join('');
ctx.fillText(emptyArr.join(''),captchaText.width/1.4, captchaText.height/1.4);

/******End CAPTCHA*******/
