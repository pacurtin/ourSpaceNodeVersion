/**
 * A directive to display a countdown on the main home page
 */

app.directive("countdownDirective", function() {
    return {
        templateUrl : '/templates/countdownDirective.html',
        link: function() {
          $(function(){
              var calcNewYear = setInterval(function(){
                  //date_future = new Date(new Date().setDate;
                  date_future = new Date();
                  date_future.setFullYear(2017, 6, 25);
                  date_future.setHours(6);
                  date_future.setMinutes(15);
                  date_future.setSeconds(0);
                  date_now = new Date();

                  seconds = Math.floor((date_future - (date_now))/1000);
                  minutes = Math.floor(seconds/60);
                  hours = Math.floor(minutes/60);
                  days = Math.floor(hours / 24);
                  weeks = Math.floor(days / 7);

                  hours = hours-(days*24);
                  minutes = minutes-(days*24*60)-(hours*60);
                  seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

                  $("#weeks").text(weeks);
                  $("#days").text(days);
                  $("#hours").text(hours);
                  $("#minutes").text(minutes);
                  $("#seconds").text(seconds);
              }, 1000);
          });
        }
    };
});
