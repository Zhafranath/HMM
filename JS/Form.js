
const btn = document.getElementById("submit");
btn.addEventListener("click", function() {
  var result,x,y,z,w,v;
  var match = document.getElementById('match').value;
  var winrateA = document.getElementById('winrateA').value;
  var winrateB = document.getElementById('winrateB').value;
  var name = document.getElementById('name').value;
  y = (winrateA/100)*match;
  x = ((100*y)-winrateB*match)/(winrateB-100);
  w = Math.ceil(x);
  console.log(x);
  if(x > 0){
    z = ' '+name+ ' memerlukan sekitar ' + w + ' kemenangan tanpa kekalahan untuk mencapai winrate ' + winrateB + '%';
    result = document.getElementById('hasilB').innerHTML = z;
  }
  else 
  {
    v = Math.abs(w);
    z = ' '+name+' memerlukan sekitar ' + v + ' kekalahan tanpa kemenangan untuk mencapai winrate '+ winrateB + '%';
    result = document.getElementById('hasilB').innerHTML = z;
  }

});