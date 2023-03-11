window.addEventListener("load", init);
const KEPEK = [
  "/kepek/DSC7025.jpg",
  "/kepek/DSC7365.jpg",
  "/kepek/DSC7371.jpg",
  "/kepek/DSC7444.jpg",
  "/kepek/DSC7515.jpg",
];
function init() {
  

  const ART = document.querySelector("article");
  //let kepEgy = document.innerHTML ="<div><img src='' alt='kép'><div>";
  for (let i = 0; i < KEPEK.length; i++) {
    ART.innerHTML += `<div><img src='${KEPEK[i]}' alt='kép'><div>`;
  }
  const kepElem2 = document.querySelectorAll("article div img");
  for (let i = 0; i < kepElem2.length; i++) {
    kepElem2[i].addEventListener("click", function(){egerEsemeny(i)});
  }
  GOMB = document.querySelectorAll("section button");
  for (let i = 0; i < GOMB.length; i++) {
  GOMB[i].addEventListener("click", function(){leptetes(i)});
  }

}
function egerEsemeny(i) {
  const NAGYKEP = document.querySelectorAll("section div img");
  NAGYKEP[0].src = KEPEK[i];
}
 function leptetes(i){
  GOMBBAL = document.querySelector("bal");
  GOMBJOBB = document.querySelector("jobb");
  const NAGYKEP2 = document.querySelectorAll("section div img");
  if(GOMBBAL){
    NAGYKEP2[0].src = KEPEK[i-1];
  }
  if(GOMBJOBB){
    NAGYKEP2[0].src = KEPEK[i+1];
  }
  
 }
