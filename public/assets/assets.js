const ana = document.querySelectorAll('.ana');
const nay = document.querySelectorAll('.nay');
document.getElementById("fotos").style.display = "none";

ana.forEach(element => {
  element.setAttribute('style', 'display: none;');
});
nay.forEach(element => {
    element.setAttribute('style', 'display: none;');
});

function mostra(quem){ 
    document.getElementById("fotos").style.display = "block";
    if (quem == 'ana'){
        ana.forEach(element => {
            element.setAttribute('style', 'display: block;');
          });  
          nay.forEach(element => {
            element.setAttribute('style', 'display: none;');
        });
        
    }else{
        nay.forEach(element => {
            element.setAttribute('style', 'display: block;');
          });
        ana.forEach(element => {
            element.setAttribute('style', 'display: none;');
        })
        
    }
}