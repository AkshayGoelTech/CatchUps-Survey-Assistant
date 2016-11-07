/**
	All the code is completely original and belongs to Akshay Goel.
	Please contact me at akshaygoel1@gmail.com or visit my website akshaygoel.net to contact me.

	This Chrome Extension has been developed to assist RA's in the process of filling out Catch Up Surveys.
	A lot of the data requested, is repetetive (Residence Hall and RA Name). Hence, this extension will make the process easier, by remebering those repetetive details after the RA has filled out the survey once. The extension will go ahead, and auto-fill that common data.
*/


window.onload = function() { 
 	alert('dom is ready'); 
 };

function saveData() {
	var key = window.location.pathname.split("/")[2];
	var data = {'Day': Day, 'Availability': Availability, 'names': mapKeys, 'assignCount':assignCount, 'test': "3"};
	saveFile[key] = data;
	chrome.storage.sync.set(saveFile, function() {	
		start();
	});
}