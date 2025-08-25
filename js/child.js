// create child or element

const newChild= document.createElement('li');
newChild.innerText='Messi is the greatest footballer';

// 2.find the parent 

const palyerList= document.getElementById('player-list');

// 3. append the child to the parent
palyerList.appendChild(newChild);