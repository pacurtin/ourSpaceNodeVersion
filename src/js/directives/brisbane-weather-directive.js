/**
 * A directive to display the time and weather in Brisbane. Powered by Accuweather.com
 */

app.directive("brisbaneWeatherDirective", function() {
    return {
        templateUrl : '/templates/brisbaneWeatherDirective.html'
    };
});
