   var sensorAcc = null;
  
    document.addEventListener("deviceready", onDeviceReady, false);
 
    function onDeviceReady() {
        var options = { frequency: 80 };
 
        sensorAcc = navigator.accelerometer.watchAcceleration(accelerometerSuccess, accelerometerError, options);
    }
     
    function accelerometerError() {
        alert('Failed to load accelerometer!');
    }
     
    function accelerometerSuccess(acceleration) {        
        var str = 'Acceleration X: ' + acceleration.x + '<br />' +
                  'Acceleration Y: ' + acceleration.y + '<br />' +
                  'Acceleration Z: ' + acceleration.z + '<br />';
        $('div.result').html(str); 
    }