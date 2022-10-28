// Wrap every letter in a span

var i = 0;
var txt = 'Assalamualaikum Wr Wb Nama saya Muhammad Zhafran Athofani (11200910000034) saya membuat web ini untuk memenuhi UTS Pemrograman Bebasis Platform ENJOYY IT :)';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    document.getElementById("div").className = "tombol2";
}
var a = document.getElementById("time");
var b = document.getElementById("time2");

function waktu(){
  var hari = new Date();
  var jam = hari.getHours();
  var menit = hari.getMinutes();
  var detik = hari.getSeconds();
  var tanggal = hari.getDate();
  var bulan = hari.getMonth();
  var tahun = hari.getFullYear();
  var bulan2 = bulan + 1;
  j = checkTime(jam);
  m = checkTime(menit);
  d = checkTime(detik);
  a.innerHTML = j + ":" + m + ":" + d;
  b.innerHTML = tanggal + "/" + bulan2 + "/" + tahun;
  var t = setTimeout(waktu, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}