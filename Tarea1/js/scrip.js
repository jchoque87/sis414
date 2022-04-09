var p1,p2,p3,p4,p5,points;
let btn=document.querySelector("#btn");
btn.addEventListener("click", function(){

    // 1a pregunta
    if (document.getElementById('12').checked==true) {
        p1=20;
    }
    else {
        p1=0;
    }
    // 2da pregunta
     let diablo=document.querySelector("#diablo").value;
    if (diablo=="diablo") {
        p2=20;
     }
    else {
      p2=0;
    }
    // 3a pregunta
    if (document.getElementById('22').checked==true) {p3=20; }
    else {
        p3=0;
    }
    // 4a pregunta
    if (document.getElementById('24').checked==true) {
        p4=20; 
    }
     else {
        p4=0;
    }
     //5a pregunta
     let salar_de_uyuni=document.querySelector("#salar_de_uyuni").value;
    if (salar_de_uyuni=="salar_de_uyuni") {
        p5=20;
    }
    else {
      p5=0;
    }
      
    points=p1+p2+p3+p4+p5;
   
   // alert(" puntaje: " + points);

    document.querySelector("#result").innerHTML=  points;
})

