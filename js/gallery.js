/*Name this external file gallery.js*/

document.addEventListener('DOMContentLoaded', () => {
       //makes a list from the elements with the class name 'preview'
       const imagelist = document.getElementsByClassName('preview');
       //takes that list and makes it an array
       const imagearray = Array.from(imagelist);
      
       //gives a tab index of each element to 1
       for(let i = 0; i< imagearray.length; i++){
              imagearray[i].setAttribute("tabindex", "1");
              console.log(imagearray[i]);
       
       }
       
       
       
});



function upDate(previewPic){
       document.getElementById('image').innerHTML= previewPic.alt;
       var backgroundimg = previewPic.src;
       document.getElementById('image').style.backgroundImage = 'url(\'' + backgroundimg +'\')' ;

     
       }
   
function unDo(){
       document.getElementById('image').innerHTML= "Hover over an image below to display here.";
       document.getElementById('image').style.backgroundImage = 'url(\''+ '' + '\')';
           
       }

