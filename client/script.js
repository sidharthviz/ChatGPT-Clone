import bot from './assets/bog.svg';
import user from './assets/user.svg';


const from  = document.querySelector('form');
const chatContainer = document.querySelector("#chat_container");

let loadInterval;

function loader(element){

  element.textContent = setInterval(() => {
    element.textContent += '.';
    if(element.textContent === '....'){
      element.textContent = '.';
    }
  }, 3000)
}