function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function personalData()
{
	info =  'Moje imie to Dominik' + '\n' +
			'a nazwisko: Adamski \n' 

	navigator.notification.alert(info);
}

function businesscard()
{
	info = 'PERSONAL INFORMATION' +
	'Name and surname: Dominik Adamski' +
	'Email: dominik.adamski@interia.pl' +
	'Dean\'s group: KrDUIs1011' +
	'Field of study: applied computer science'
}