const slides = document.querySelectorAll('.slide');
console.log("slides", slides)

for (const slide of slides){
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  }) 
}