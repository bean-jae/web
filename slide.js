let pages = 0;
let positionValue = 0;
const IMAGE_WIDTH = 680;

const backBtn = document.querySelector(".back")
const nextBtn = document.querySelector(".next")
const images = document.querySelector(".slide_wrap")

function next() {
  if (pages< 3) {
    backBtn.removeAttribute('disabled')
    positionValue -= IMAGE_WIDTH;
    images.style.transform = `translateX(${positionValue}px)`;
		
    pages += 1;
  }
  if (pages === 3) { 
    nextBtn.setAttribute('disabled', 'true')
  }
}

function back() {
  if (pages > 0) {
    nextBtn.removeAttribute('disabled')
    positionValue += IMAGE_WIDTH;
    images.style.transform = `translateX(${positionValue}px)`;
    pages -= 1;
  }
  if (pages === 0) {
    backBtn.setAttribute('disabled', 'true')
  }
}

function init() {
  backBtn.setAttribute('disabled', 'true');
  backBtn.addEventListener("click", back);
  nextBtn.addEventListener("click", next);
}
init();