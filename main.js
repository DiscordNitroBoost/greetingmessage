let time = 20;
let exittimer = 6;
let incorrect = false;
let currentq=0;
const question = [
    "",
    "2+2",
    "Melyik nincsen telefonon?",
    "Melyik szó magyar?",
    "Melyik a legjobb kvíz?",
    "melyik szomorú?",
    "Lehúzás a kahoot?",
    "mennyi 20+1?",
    "eddig jó volt?",
    "most hogy játszottál, tényleg jobb mint a kahoot?"
];

const one = [
    "",
    "3",
    "Super Mario Maker 2",
    "Egér",
    "Kahoot!",
    ":)",
    "IGEN",
    "345",
    "NEM",
    "NEM"
];

const two = [
    "",
    "22",
    "Among Us",
    "Dampfschifffahrt",
    "KérdésVihar!",
    ":(",
    "NEM",
    "21",
    "IGEN",
    "TÖK SZEMÉT!"
];

const three = [
    "",
    "4",
    "Roblox",
    "Schafseckel",
    "Menti",
    ":-)",
    "van kahoot előfizetésem",
    "47",
    "nagyon szemét volt",
    "IGEN"
];

const answer = [
    1,
    3,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    3 
];
function timerdisplay() {
    if (currentq==10) {
    } else {
   if (time!=0) {
    time--;
    document.getElementById("timer").innerHTML = time+'s';
}
if (time==0||incorrect) {
    exittimer--;
    if (incorrect) {
        document.getElementById("timer").innerHTML = "hibás válasz! most kezdheted előlről! "+exittimer+"... ezen még változtatni fogunk :/";
    } else {
    document.getElementById("timer").innerHTML = "lejárt az idő! most kezdheted előlről! "+exittimer+".. ezen még változtatni fogunk :/";
    }
if (exittimer==0) {
    window.location.replace("/");
}
}}}
function check(value) {
    if (value==answer[currentq]) {
        if (!incorrect) {
            if (currentq<10) {   
            currentq+=1;
            time=20;
            document.getElementById("timer").innerHTML="20s";
            document.getElementById("question").innerHTML=question[currentq];
            document.getElementById("1").innerHTML=one[currentq];
            document.getElementById("2").innerHTML=two[currentq];
            document.getElementById("3").innerHTML=three[currentq];
            if (currentq==10) {
       document.getElementById("question").innerHTML = "minden válasz helyes!";
       document.getElementById("continue").style.visibility="visible";
       document.getElementById("1").style.visibility="hidden";
       document.getElementById("2").style.visibility="hidden";
       document.getElementById("3").style.visibility="hidden";
       document.getElementById("timer").style.visibility="hidden";
            }
        }}
    } else {
        incorrect=true;
    }
}
setInterval(timerdisplay, 1000);