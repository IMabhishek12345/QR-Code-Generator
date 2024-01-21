let qrtext=document.getElementById("qr-text");
let sizes=document.getElementById("sizes");
let downloadBtn=document.getElementById("Download");
let generateBtn=document.getElementById("Generate");
let qrbody=document.querySelector(".qr-body");

let size=sizes.value;
function isEmpty(){
    if (qrtext.value.length>0){
        GenerateQR();
    }else{
        alert("enter a valid text");   
     }
}
    
generateBtn.addEventListener("click",(e)=>{
   e.preventDefault();
   isEmpty();
})
sizes.addEventListener("change",(e)=>{
   
    size=e.target.value;
    isEmpty();
})

downloadBtn.addEventListener("click",()=>{
    let img=document.querySelector(".qr-body img");
    

    if (img!==null){
        let imgAttr=img.getAttribute("src");
        downloadBtn.setAttribute("href",imgAttr);
    }else{
        downloadBtn.setAttribute("href",`${document.querySelector("canvas").toDataURL()}`);
    }
})
function GenerateQR(){
    qrbody.innerHTML="";
    new QRCode(qrbody, {
    text: qrtext.value,
    width: size,
    height: size,
    colorDark : "#000000",
    colorLight : "#ffffff",
 
});
}
