const newChild= document.createElement('li');
newChild.innerText='Messi is the greatest footballer';

// find the parent 

const palyerList= document.getElementById('player-list');
// append the child to the parent
palyerList.appendChild(newChild);