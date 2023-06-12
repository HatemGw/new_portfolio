const colorsLi = document.querySelectorAll('.setting-box .option-box .colors li');

//changing colors in settings-box
colorsLi.forEach(li =>{
    
    li.addEventListener('click',(e)=>{
        
     console.log(e.target.dataset.color);
        document.documentElement.style.setProperty('--second-background-color', e.target.dataset.color)
    } )
})

//open settings-box
document.querySelector('.setting-box .fa-gear').onclick = function (){

    document.querySelector('.setting-box').classList.toggle('open');
}