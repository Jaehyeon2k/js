// console.log(document.querySelector("#colorPicker").value);
// alert(document.querySelector("#colorPicker").value);

// document.querySelector("#colorText").innerHTML
// = "<h1>컬러코드 :  </h1>" + document.querySelector("#colorPicker").value;

// document.querySelector("#colorText").textContent
// = `컬러코드 :  ${document.querySelector("#colorPicker").value}`;

const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");

// text.textContent = `컬러코드 : ${color.value}`;


const colorbg = () => {
    if(color.value == '#ffffff'){
        text.textContent = `컬러 코드 : white`;
    } else if (color.value == "#000000") {
        text.textContent = `컬러 코드 : black`;
    } else {
    text.textContent = `컬러 코드 : ${color.value}`;
    }
    document.body.style.background == color.value;
}
addEventListener('input',colorbg);

