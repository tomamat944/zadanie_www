let popup = document.querySelector(".popup");
let closebtn = document.querySelector(".popup .inner .closebtn");
let form = document.querySelector("#send");


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    popup.style.display='block';
})

closebtn.addEventListener('click', (e)=>{
    popup.style.display='none';
    form.submit();
})

