const timer = document.querySelector('#timer');
setInterval(function() {
  timer.innerText -= 1;
  //console.dir(timer.innerText);
}, 1000);
