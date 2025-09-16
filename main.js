const FIELD_SIZE=540
const ERASER_COLOR='white'

const cont=document.querySelector('#container')
const btnInput=document.querySelector('#grid-input')
const resetBtn=document.querySelector('#reset')
const dimCont=document.querySelector('#dimensions')
const colorButtons=document.querySelectorAll('#buttons button')
const colorPalette=document.querySelector('#color-palette')
const eraseButton=document.querySelector('#eraser-button')

//event listeners to change coloros with palette element
colorPalette.addEventListener("input", putColor, false);
colorPalette.addEventListener("change", putColor, false);
//event listener to assure that if we chosen some color buttons will be inactive
colorPalette.addEventListener('change',()=>{
        colorButtons.forEach((b)=>b.classList.remove('active'))
})

//on load event
window.addEventListener('load',setField(16))
btnInput.addEventListener('input',setupField)

colorButtons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        colorButtons.forEach((b)=>b.classList.remove('active'))
        btn.classList.add('active')
        colorPalette.value=''
       // setupField()
    })
    
    
})
//function to add drag-n-click support with event handling
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
    let color
    //change color of cursor if button active have higher priority
    for(btn of colorButtons){
        if (btn.classList.contains('active')){
            color=btn.id.split('-')[0]
            console.log(color)
            return color
        }
        
    }
    if(colorPalette.value){
        color=colorPalette.value
        return color
    }
   
    
        
}

function getGridSize(){
    let size=btnInput.value
    console.log(size)
    return size
}
function setField(val){
    dimCont.textContent=`${val}X${val}`;
    let size=Math.ceil(FIELD_SIZE/val)
    
    for(let i=0;i<val;i++){

        const row=document.createElement('div');
        row.classList.add('row');
        row.style.height=`${size}px`;
       

        for(let j=0;j<val;j++){

            const pixel=document.createElement('div');
            console.log(val);
            pixel.style.width=`${size}px`;


            // drawing events
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
    else if(color==='eraser'){
         elem.style.backgroundColor=ERASER_COLOR
    }
    else{
        elem.style.backgroundColor=color
    }
    

}
