document.querySelector('.menu-btn').addEventListener('click',() =>{
    document.querySelector('.right-menu').classList.toggle('show');
    
})

class UI {
    static showAndHide(i) {
        
        document.querySelectorAll('.list')[i].classList.toggle('show');
    }
}

var listItem = document.querySelectorAll('.test');

for(let i =0; i<listItem.length; i++){
    listItem[i].addEventListener('click',() =>{
        UI.showAndHide(i);
        console.log(project1[0]);
    })
}


var listTab = document.querySelector('.showcase-list').getElementsByTagName('li');
var project = document.querySelector('.project');
for (let i=0; i<listTab.length; i++){
    listTab[i].addEventListener('click',()=>{
        document.querySelector('.showcase-list').getElementsByClassName('active')[0].classList.remove('active');
        listTab[i].classList.add('active');


        project.getElementsByClassName("active")[0].classList.remove("active");
        project.getElementsByTagName('ul')[i].classList.add('active');
    });
}

class TypeWriter {
    constructor(txtElement, words) {
        this.txtElement = txtElement;
        this.words = words;
        this.wordIndex = 0;
        this.txt = '';
        this.checked = false;
        this.type();
    }
    type(){
        
        
        
        
        let currentIndex = this.wordIndex % this.words.length;
        let fullText = this.words[currentIndex];
        if(this.checked){
            this.txt = fullText.substring(0,this.txt.length -1);
        }else {
            this.txt = fullText.substring(0,this.txt.length +1);
        }
        
        
        this.txtElement.innerHTML = `${this.txt}`;

        let typeSpeed = 200;
        if(this.checked){
            typeSpeed =100;
        }
        if(this.txt == fullText) {
            this.checked = true;
            typeSpeed = 1500;
            
        }else if(this.txt =='') {
            this.checked = false;
            this.wordIndex++;
            typeSpeed = 1000;
        }
        




        setTimeout(() => {
            this.type();
        }, typeSpeed);
    }
}
document.addEventListener('DOMContentLoaded',() => {
    const txtType = document.querySelector('.txt-type');
    const words = JSON.parse(txtType.getAttribute('data-words'));
    new TypeWriter(txtType,words);
    
    
});

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length -1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}





