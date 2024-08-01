let text = document.getElementById('text')
let pass = document.getElementById('pass')
let repass = document.getElementById('repass')
let login=document.getElementById('for')
let signin = document.getElementById('for2')
let btnlog = document.getElementById('button')
let submit =document.getElementById('sign')
let a = document.getElementById('btn3')
let btnsign = document.getElementById('btn4')
login.style.display='none'


btnlog.addEventListener('click',() => {
    setTimeout(()=>{
    login.style.display="block"
    signin.style.display='none'
   submit.addEventListener('click',()=>{
    if(text.value === ""){
alert("please fill the input field")
    }
})
},1000)
})


btnsign.addEventListener( 'click',() => {
    setTimeout( () => {
    login.style.display='none'
    signin.style.display='block'
   
    a.addEventListener('click',()=>{
        if(text.value === ""){
            alert("please fill the input field")
        }
})
},1000)
})







































