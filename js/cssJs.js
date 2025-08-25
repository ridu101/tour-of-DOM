//const sections=document.getElementsByTagName('section');
//console.log(sections);

const sections= document.querySelectorAll('section');
//console.log(section);

//for (const section of sections){
   // console.log(section);
    //section.style.backgroundColor= 'lightblue';
    //section.style.border=' 3px solid red'
    //section.style.marginBottom= '15px'
    //section.style.borderRadius='20px'
//}

for (const section of sections){
    section.classList.add('section-card');
}