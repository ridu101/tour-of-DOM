// **********How to create new element in js add set it to the html

// 1. parent node 
const mainContainer=document.getElementById('main-container')
//  2. create child
 const bookSection = document.createElement('section');

 bookSection.innerHTML=`
  <h1>my books</h1>
 <ul>
    <li>Physics</li>
    <li>Physics</li>
    <li>Physics</li>
    <li>Physics</li>
    <li>Physics</li>
  
  
  </ul>
 `
// 3. append to the parent 

mainContainer.appendChild(bookSection);