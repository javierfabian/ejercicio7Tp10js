let unTexto = "jessicA cadenA baderA mesA ";
let i = 0;
let letraA = 0; 

while(i < unTexto.length){
    while(unTexto[i] == " "){
    i++;
}    
while((unTexto[i]!= " ") && (i < unTexto.length)){
    i++;
     
 
    }
    
    if(unTexto[i-1] == 'A' && (i < unTexto.length) )
    letraA++;
}
    
console.log(" las palabras que terminan con A son: ",letraA);