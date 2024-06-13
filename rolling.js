let roller = document.querySelector('.line_wrap');
roller.id = 'roller1';

let clone = roller.cloneNode(true)

clone.id = 'roller2';
document.querySelector('.line').appendChild(clone);

document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.line_wrap>img').offsetWidth + 'px';

roller.classList.add('original');
clone.classList.add('clone');