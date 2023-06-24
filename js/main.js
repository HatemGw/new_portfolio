//colors in local storage
let mainColors = localStorage.getItem("color-options");

if(mainColors !== null){
    document.documentElement.style.setProperty('--second-background-color', mainColors);

    document.querySelectorAll('.setting-box .colors li').forEach(Element=>{
        Element.classList.remove('active');
    if(Element.dataset.color === mainColors){
        Element.classList.add('active');
    }
    });
}

const colorsLi = document.querySelectorAll('.setting-box .option-box .colors li');

//changing colors in settings-box
colorsLi.forEach(li =>{
    
    li.addEventListener('click',(e)=>{
        
    document.documentElement.style.setProperty('--second-background-color', e.target.dataset.color)
    //store in local storage
    localStorage.setItem('color-options', e.target.dataset.color);

    //remove active class from other li
    e.target.parentElement.querySelectorAll('.active').forEach(Element =>{
        Element.classList.remove('active');
    })

    //add active class for target element
    e.target.classList.add('active');
    } )

    
})

//open settings-box
document.querySelector('.setting-box .fa-gear').onclick = function (){

    document.querySelector('.setting-box').classList.toggle('open');
}