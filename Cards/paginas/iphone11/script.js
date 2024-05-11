var color;
var product;
var variavel;

function trocar(product,color){

   var rootImage = "../../assets/"+product+"-"+color+".png";
   
   
   document.getElementById("iphone 11-").src=rootImage;
   
   document.getElementById("titulo-"+product).textContent=product+' - 64GB '+color+' | Muito Bom';

  
}