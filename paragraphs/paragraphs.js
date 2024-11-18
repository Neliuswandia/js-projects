const btn = document.querySelector('button')
const text = document.querySelector('p')

text.style.display = 'none'

btn.addEventListener('click', () => {
    const width =  btn.offsetWidth // width of the button
    if(width === 700){
        btn.style.width = 'auto'
        text.style.display = 'block'
    }else{
        btn.style.width = '700px'
        text.style.display = 'none'
    }
})