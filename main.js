const light=document.querySelector('.box__light')
const night=document.querySelector('.box__night')
const dark=document.querySelector('.box__dark')
const openbtn=document.querySelector('.open-btn')
const closebtn=document.querySelector('.close-btn')
const collapsebtn=document.querySelector('.collapse-icon')
const sidebar=document.querySelector('.sidebar')

collapsebtn.addEventListener('click',()=>{
  sidebar.classList.toggle('collapsed');

  localStorage.setItem('collapsed',sidebar.classList.contains('collapsed'))
})

if(localStorage.getItem('collapsed')=== 'true'){
    sidebar.classList.add('collapsed')
}



//adding themes and localStorage memory

light.addEventListener('click',()=>{
    document.body.classList.remove('night-theme','dark-theme')
    document.body.classList.add('light-theme')

    localStorage.setItem('theme','light')
})
night.addEventListener('click',()=>{
    document.body.classList.remove('light-theme','dark-theme')
    document.body.classList.add('night-theme')

    localStorage.setItem('theme','night')
})
dark.addEventListener('click',()=>{
    document.body.classList.remove('light-theme','night-theme')
    document.body.classList.add('dark-theme')

    localStorage.setItem('theme','dark')
})

//restoring the theme
const savedTheme= localStorage.getItem('theme')
if(savedTheme ==='light'){
    document.body.classList.add('light-theme')
}
if(savedTheme ==='night'){
    document.body.classList.add('night-theme')
}
if(savedTheme === 'dark'){
    document.body.classList.add('dark-theme')
}


