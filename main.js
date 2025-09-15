const cont=document.querySelector('#container')
const btn=document.querySelector('#add')
const resetBtn=document.querySelector('#reset')
const dimcont=document.querySelector('#dimensions')

window.addEventListener('load',setField(16))
btn.addEventListener('input',()=>{
    cont.textContent=''
    setField(btn.value)
})
resetBtn.addEventListener('click',resetField)

function setField(val){
    dimcont.textContent=`${val}X${val}`;
    for(let i=0;i<val;i++){
        let row=document.createElement('div')
        row.classList.add('row')
        let size=Math.ceil(540/val)
        row.setAttribute('style',`height:${size}px;padding:0;margin:0;`)
        for(let j=0;j<val;j++){
            let pixel=document.createElement('div')
            console.log(val)
            pixel.setAttribute('style',`width:${size}px;`)
            pixel.addEventListener('mouseover',()=>{
            pixel.style.backgroundColor='black'
            })
            row.appendChild(pixel)}
        cont.appendChild(row)
    }
}
function resetField(){
    let cells=document.querySelectorAll('#container .row div')
    console.log(cells)
    cells.forEach((elem)=>{
        elem.style.backgroundColor='white';
    
    })

}
function setColor(){
    const randNum=Math.floor(Math.random()*0xFFFFFF);
    let hexColor = randomNum.toString(16);
    hexColor = hexColor.padStart(6, '0');

    return `#${hexColor}`
}
