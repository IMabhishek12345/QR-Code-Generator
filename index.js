let qrtext=document.getElementById("qr-text");
let sizes=document.getElementById("sizes");
let downloadBtn=document.getElementById("Download");
let generateBtn=document.getElementById("Generate");
let qrbody=document.querySelector(".qr-body");

let size=sizes.value;
generateBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  GenerateQR();
})

function GenerateQR(){
    new QRCode(qrbody, {
    text: qrtext.value,
    width: size,
    height: size,
    colorDark : "#000000",
    colorLight : "#ffffff",
 
});
}
