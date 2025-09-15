const cont=document.querySelector('#container')
const btn=document.querySelector("#grid-input")
const resetBtn=document.querySelector('#reset')
btn.addEventListener('input',()=>{
    cont.textContent=''
    setField(btn.value)
})
//resetBtn.addEventListener('click',resetField)

function setField(val){
    //generate pixels
    for(let i=0;i<val;i++){
        let row=document.createElement('div')
        row.classList.add('row')
        let size=Math.ceil(500/val)
        row.setAttribute('style',`height:${size}px;padding:0;margin:0;`)
        for(let j=0;j<val;j++){
            let pixel=document.createElement('div')
            pixel.setAttribute('style',`width:${size}px;height:${size}px`)
            pixel.addEventListener('mouseover',()=>{
                setColor('black',pixel)
            })
            row.appendChild(pixel)}
        cont.appendChild(row)
        console.log(val)
    }
}
function resetField(){
    //instead of recreating each block just set it color to white
    let rowCont= document.querySelectorAll('#container .row div')
   
    rowCont.forEach((elem)=>{
        setColor('white',elem);
    })
    
}
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
        elem.style.backgroundColor==color
    }
    

}
