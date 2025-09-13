const cont=document.querySelector('#container')
const btn=document.querySelector('#add')
btn.addEventListener('input',()=>{
    cont.textContent=''
    changeField(btn.value)
})

function changeField(val){
    for(let i=0;i<val;i++){
        let row=document.createElement('div')
        row.classList.add('row')
        let size=Math.ceil(980/val)
        row.setAttribute('style',`height:${size}px;padding:0;margin:0;`)
        for(let j=0;j<val;j++){
            let pixel=document.createElement('div')
            console.log(val)
            pixel.setAttribute('style',`width:${size}px;heigh:${size}px`)
            pixel.addEventListener('mouseover',()=>{
                pixel.style.backgroundColor='black'
            })
            row.appendChild(pixel)}
        cont.appendChild(row)
    }
}
function showGrid(element){
    element.style
}
