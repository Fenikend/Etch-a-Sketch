const FIELD_SIZE=540

const cont=document.querySelector('#container')
const btnInput=document.querySelector('#grid-input')
const resetBtn=document.querySelector('#reset')
const dimCont=document.querySelector('#dimensions')
const colorButtons=document.querySelectorAll('#buttons button')


window.addEventListener('load',setField(16))
btnInput.addEventListener('input',setupField)

colorButtons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        colorButtons.forEach((b)=>b.classList.remove('active'))
        btn.classList.add('active')
        setupField()
    })
    
    
})

function putColor(e){
    if(e.buttons === 1){
        setColor(getColor(),e.target)
    }
}
function setupField(){
    cont.textContent='';
    size=getGridSize();
    setField(size);
}

resetBtn.addEventListener('click',resetField)
function getColor(){
    for(btn of colorButtons){
        if (btn.classList.contains('active')){
            let color=btn.id.split('-')[0]
            console.log(color)
            return color
    }}
    return color 
}
function getGridSize(){
    let size=btnInput.value
    console.log(size)
    return size
}
function setField(val){
    dimCont.textContent=`${val}X${val}`;
    for(let i=0;i<val;i++){
        let row=document.createElement('div')
        row.classList.add('row')
        let size=Math.ceil(FIELD_SIZE/val)
        row.setAttribute('style',`height:${size}px;padding:0;margin:0;`)
        for(let j=0;j<val;j++){
            let pixel=document.createElement('div')
            console.log(val)
            pixel.ondragstart = (e) => e.preventDefault();
            pixel.setAttribute('style',`width:${size}px;`)
            pixel.addEventListener('mouseover',putColor)
            pixel.addEventListener('mousedown',(e)=>{
                if (e.button===0) setColor(getColor(),e.target)
            })
            row.appendChild(pixel)}
        cont.appendChild(row)
        console.log(val)
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
