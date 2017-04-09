//serves up our static files
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/src'));
app.use("/node_modules", express.static('node_modules')); //SO IMPORTANT!!!!

var server = app.listen(port, function () {
    var port = server.address().port;
    console.log("Serving statics on port: "+port);
    console.log("To make available to web redirect port 80 to this. iptables command might work.");
});

/*app.post("/lightsOn", function(req, res) {
    console.log("Turning lights on");
    res.status(200).send("Turning lights on");
    const lightOn = spawn('python', ["/home/pi/Desktop/StepperMotorLightSwitch/LightsOn.py"]);
});*/