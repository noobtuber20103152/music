let sum = 0;
let h = document.getElementById("heart");
function heart() {
  if (sum % 2 == 0) {
    h.style.color = "red";
    sum++;
  } else {
    h.style.color = "black";
    sum++;
  }
}
var x = "";
let text = "Kya Baat Ay - Harrdy Sandhu.mp3";
document.getElementById("heart").addEventListener("click", heart);
document.getElementById("song1").addEventListener("click", song1);
function song1() {
  document.getElementById("songname1").innerHTML = "Dance Like";
  document.getElementById("songname2").innerHTML = "Dance Like";
  document.getElementById("artist").innerHTML = "Harrdy Shandu";
  document.getElementById("duration").innerHTML = "2 min 51 sec";
  document.getElementById("songimg").src = "./12.jpg";
  document.getElementById("realsong").href = "1.mp3";
  text = "1.mp3";
  x = new Audio(`${text}`);
}
document.getElementById("song2").addEventListener("click", song2);
function song2() {
  document.getElementById("songname1").innerHTML = "Illegal Weapon 2.0";
  document.getElementById("songname2").innerHTML = "Street Dancer";
  document.getElementById("artist").innerHTML = "Jasmine Sandlas. Garry Sandhu";
  document.getElementById("duration").innerHTML = "3 min 08 sec";
  document.getElementById("songimg").src = "./22.jpg";
  document.getElementById("realsong").href = "2.mp3";
  text = "2.mp3";
  x = new Audio(`${text}`);
}
document.getElementById("song3").addEventListener("click", song3);
function song3() {
  document.getElementById("songname1").innerHTML = "First Kiss";
  document.getElementById("songname2").innerHTML = "First Kiss";
  document.getElementById("artist").innerHTML = "Yo Yo Honey Singh";
  document.getElementById("duration").innerHTML = "3 min 08 sec";
  document.getElementById("songimg").src = "./32.jpg";
  document.getElementById("realsong").href = "3.mp3";
  text = "3.mp3";
  x = new Audio(`${text}`);
}
document.getElementById("song4").addEventListener("click", song4);
function song4() {
  document.getElementById("songname1").innerHTML = "Baby Girl";
  document.getElementById("songname2").innerHTML = "Babu Girl 2020";
  document.getElementById("artist").innerHTML = "Yo Guru Randhawa";
  document.getElementById("duration").innerHTML = "2 min 40 sec";
  document.getElementById("songimg").src = "./42.jpg";
  document.getElementById("realsong").href = "4.mp3";
  text = "4.mp3";
  x = new Audio(`${text}`);
}
document.getElementById("song5").addEventListener("click", song5);
function song5() {
  document.getElementById("songname1").innerHTML = "Kya Kru";
  document.getElementById("songname2").innerHTML = "Kya kru 2020";
  document.getElementById("artist").innerHTML = "Milind Gabba";
  document.getElementById("duration").innerHTML = "3 min 40 sec";
  document.getElementById("songimg").src = "./52.jpg";
  document.getElementById("realsong").href = "5.mp3";
  text = "5.mp3";
  x = new Audio(`${text}`);
}
x = new Audio(`${text}`);
// text = 'Dance Like - Harrdy Sandhu.mp3'
let count = 0;
document.getElementById("play").addEventListener("click", function () {
  if (count % 2 == 0) {
    x.play();
    count++;
    document.getElementById("play").innerHTML = "Pause";
  } else {
    x.pause();
    count++;
    document.getElementById("play").innerHTML = "Play";
  }
});
