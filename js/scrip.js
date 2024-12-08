const mobilbtn = document.querySelector('#mobail-btn');
const mobilmenu = document.querySelector('#mobail-menu');

mobilbtn.addEventListener('click',()=>{
  mobilmenu.classList.toggle('hidden')
})