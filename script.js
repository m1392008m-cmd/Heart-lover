function generateLink() {
const data = {
from: document.getElementById("fromName").value,
to: document.getElementById("toName").value,
type: document.getElementById("type").value,
password: document.getElementById("password").value
};

localStorage.setItem("loveMessage", JSON.stringify(data));

const link = window.location.origin + "/message.html";
document.getElementById("generatedLink").value = link;
}

function copyLink() {
const link = document.getElementById("generatedLink");
link.select();
document.execCommand("copy");
alert("تم نسخ الرابط 💖");
}

function checkPassword() {
const saved = JSON.parse(localStorage.getItem("loveMessage"));
const entered = document.getElementById("checkPass").value;

if (entered === saved.password) {
document.getElementById("passwordBox").style.display="none";
document.getElementById("reviewSection").style.display="block";
} else {
alert("كلمة السر غلط 😢");
}
}

function showMessage() {
const saved = JSON.parse(localStorage.getItem("loveMessage"));
document.getElementById("reviewSection").style.display="none";
document.getElementById("finalMessage").style.display="block";
typeWriter(saved.type + " 🥰🥰 بعشقك 🥰🥰 😍😍 بحبك 😍😍");
}

function typeWriter(text) {
let i=0;
const speed=100;
function typing() {
if (i < text.length) {
document.getElementById("messageText").innerHTML += text.charAt(i);
i++;
setTimeout(typing,speed);
}
}
typing();
}