const light=document.querySelector('.box__light')
const night=document.querySelector('.box__night')
const dark=document.querySelector('.box__dark')
const openbtn=document.querySelector('.open-btn')
const closebtn=document.querySelector('.close-btn')
const collapsebtn=document.querySelector('.collapse-icon')
const sidebar=document.querySelector('.sidebar')

collapsebtn.addEventListener('click',()=>{
  sidebar.classList.toggle('collapsed');
})


