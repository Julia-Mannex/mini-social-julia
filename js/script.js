let likeCount = 0;
let curtido = false; //flag booleana

function curtir() {
  
  if(curtido == false){
    likeCount++;
    curtido = true;
    document.getElementById("likeCount").innerText = likeCount;  
  }else{
    likeCount--;
    curtido = false;
    document.getElementById("likeCount").innerText = likeCount; 
  }
    


}

document.getElementById("likeBtn").addEventListener("click", curtir);


let dislikeCount = 0;
let descurtir = false;

function descurtir() {
  
  if(descurtido == false){
    likeCount++;
    descurtido = true;
    document.getElementById("dislikeCount").innerText = dislikeCount;  
  }else{
    likeCount--;
    descurtido = false;
    document.getElementById("dislikeCount").innerText = dislikeCount; 
  }
    


}

document.getElementById("dislikeBtn").addEventListener("click", descurtir);



