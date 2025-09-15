const FIELD_SIZE=540

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
        let size=Math.ceil(FIELD_SIZE/val)
        row.setAttribute('style',`height:${size}px;padding:0;margin:0;`)
        for(let j=0;j<val;j++){
            let pixel=document.createElement('div')
            console.log(val)
            pixel.setAttribute('style',`width:${size}px;`)
            pixel.addEventListener('mouseover',()=>{
            setColor('black',pixel);
            })
            row.appendChild(pixel)}
        cont.appendChild(row)
    }
}
function resetField(){
    let cells=document.querySelectorAll('#container .row div')
    console.log(cells)
    cells.forEach((elem)=>{
        setColor('white',elem);
    
    })

}
//generate random rgb type color 
function generateColor(){
    const randNum=Math.floor(Math.random()*0xFFFFFF);
    let hexColor = randNum.toString(16);
    hexColor = hexColor.padStart(6, '0');

    return `#${hexColor}`
}

function setColor(color,elem){
    if(color==='rgb'){
        elem.style.backgroundColor=generateColor();
    }
    else{
        elem.style.backgroundColor=color
    }
    

}
