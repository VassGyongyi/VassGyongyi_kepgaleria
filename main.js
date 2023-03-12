window.addEventListener("load", init);
const KEPEK = [
  "kepek/DSC7025.jpg",
  "kepek/DSC7365.jpg",
  "kepek/DSC7371.jpg",
  "kepek/DSC7444.jpg",
  "kepek/DSC7515.jpg",
];
function init() {
  const ART = document.querySelector("article");
  //let kepEgy = document.innerHTML ="<div><img src='' alt='kép'><div>";
  for (let i = 0; i < KEPEK.length; i++) {
    ART.innerHTML += `<div><img src='${KEPEK[i]}' alt='kép'><div>`;
  }
  const kepElem2 = document.querySelectorAll("article div img");
  for (let i = 0; i < kepElem2.length; i++) {
    kepElem2[i].addEventListener("click", function () {
      egerEsemeny(i);
    });
  }
  GOMBBAL = document.getElementsByClassName("bal");

  GOMBBAL[0].addEventListener("click", function () {
    leptetesBal();
  });
  GOMBJOBB = document.getElementsByClassName("jobb");

  GOMBJOBB[0].addEventListener("click", function () {
    leptetesJobb();
  });
}


function egerEsemeny(i) {
  const NAGYKEP = document.querySelectorAll("section div img");
  NAGYKEP[0].src = KEPEK[i];
}
function leptetesBal() {
  const NAGYKEP2 = document.querySelectorAll("section div img");
  for (let i = 0; i < KEPEK.length; i++)
    if (i > 0) {
      if (
        KEPEK[i] ==
        NAGYKEP2[0].src.substring(
          NAGYKEP2[0].src.length - 17,
          NAGYKEP2[0].src.length
        )
      ) {
        NAGYKEP2[0].src = KEPEK[--i];
      }
    }
}
function leptetesJobb() {
  const NAGYKEP3 = document.querySelectorAll("section div img");
  for (let i = 0; i < KEPEK.length; i++)
    if (i < KEPEK.length-1) {
      console.log(i);
      if (
        KEPEK[i] ==
        NAGYKEP3[0].src.substring(
          NAGYKEP3[0].src.length - 17,
          NAGYKEP3[0].src.length
        )
      ) {
        NAGYKEP3[0].src = KEPEK[++i];
      }
    }
}
