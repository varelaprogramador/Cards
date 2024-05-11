var color;
var product;
var card;
function trocar(product,color,card){

   var rootImage = "assets/"+product+"-"+color+".png";
   
   
   document.getElementById(product+"-"+card).src=rootImage;
   
   document.getElementById("titulo-"+product+"-"+card).textContent=product+' - 64GB '+color+' | Muito Bom';
   
  
}