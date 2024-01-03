const input = document.querySelector('#input');
const img = document.querySelector('#image');
const submit = document.querySelector('#submit');
const imgbox = document.querySelector('#imgbox');
// console.log(input.value);

submit.addEventListener('click', () => {
    if(input.value != ""){
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    input.value = "";
    img.classList.remove('qr');
    }
    else{
        img.classList.add('qr');
    }
})
