
const imagesArray = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
]

const title = [
    'Norvegia',
    'Svizzera',
    'Inghilterra',
    'Italia',
    'Hawaii'
]

let itemsContent = '';


for(let i=0; i<imagesArray.length; i++){
    itemsContent += `
    <div class="item">
        <div class="title">
            <h3>${title[i]}</h3>
            <p class="subtitle">Lorem Lorem</p>
        </div>
        <img src="${imagesArray[i]}">
    </div>`
}
const itemsContainer = document.querySelector('.items-container');
itemsContainer.innerHTML = itemsContent;






let index = 0;
const immagini = document.getElementsByClassName("item");
const sideImg = document.getElementsByClassName("side-img");

if(immagini[0]){
    immagini[index].classList.add("active");
    sideImg[index].classList.remove("active");
}

function nextClick(){    
    if(index<4){
        immagini[index].classList.remove("active");
        sideImg[index].classList.add("active");
        index++;
        immagini[index].classList.add("active");
        sideImg[index].classList.remove("active");
    }else{
        return false;
    }
}
function prevClick(){
    if(index>0){
        immagini[index].classList.remove("active");
        sideImg[index].classList.add("active");
        index--;
        immagini[index].classList.add("active");
        sideImg[index].classList.remove("active");
    }else{
        return false;
    }
}






const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
;



next.addEventListener('click', nextClick);
prev.addEventListener('click', prevClick);




