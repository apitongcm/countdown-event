let target = new Date("Dec 25, 2021 00:00:00").getTime();

let x = setInterval(function(){
  var now = new Date().getTime();
  const y = (1000 * 60 * 60 * 24 * 30);
  var differ = target - now;
  var months = Math.floor(differ / y);
  var days = Math.floor((differ % (y)) / (y / 30));
  var hours = Math.floor((differ % (y / 30)) / (y / (30 * 24)));
  var minutes = Math.floor((differ % (y / (30 * 24))) / (y / (30 * 24 * 60)));
  var seconds = Math.floor ((differ % (1000 *60)) / (1000));

  // Display the result in the element with id="demo"
 
  document.getElementById("months").innerHTML = months; 
  document.getElementById("days").innerHTML = days;
  
  document.getElementById("hours").innerHTML = hours;
  
  document.getElementById("minutes").innerHTML = minutes;

  document.getElementById("seconds").innerHTML = seconds;
 
   if (differ < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
},1000);