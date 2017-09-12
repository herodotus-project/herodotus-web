import './style.css';
import Icon from './test.png';
import printMe from './print.js';

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = `Hello World!`;
  element.classList.add('test');
  btn.innerHTML = "Click me and check the console";
  btn.onclick = printMe;

  let image = new Image();
  image.src = Icon;
  element.appendChild(image);
  element.appendChild(btn);

  return element
}

document.body.appendChild(component());