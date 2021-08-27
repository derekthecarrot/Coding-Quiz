
// STARTS TIMER ON START QUIZ BUTTON
$("#start-btn").click( function(){
    var counter = 60;
    setInterval(function() {
      counter--;
       if (counter >= 0) {
          span = document.getElementById("count");
          span.innerHTML = counter;
       }
       if (counter === 0) {
          alert('sorry, out of time');
          clearInterval(counter);
        }
      }, 1000);
 });