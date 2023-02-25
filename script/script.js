let heart = document.querySelectorAll('.heart')
let cont = document.querySelector('.container')

window.onload = () =>{
    cont.style.margin = '250px 550px'
    heart.forEach(heart =>{
        heart.style.background = 'red'
    })
    
}