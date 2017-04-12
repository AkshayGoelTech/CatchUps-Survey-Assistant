/**
	All the code is completely original and belongs to Akshay Goel.
	Please contact me at akshaygoel1@gmail.com or visit my website akshaygoel.net to contact me.

	This Chrome Extension has been developed to assist RA's in the process of filling out Catch Up Surveys.
	A lot of the data requested, is repetetive (Residence Hall and RA Name). Hence, this extension will make the process easier, by remebering those repetetive details after the RA has filled out the survey once. The extension will go ahead, and auto-fill that common data.
*/

/*
	Global Variables
*/

if (!(document.getElementsByTagName('title')[0].text.includes("HRL Catch Ups")))
	throw new Error("Not Catch Up");

var hall;
var name;

var newHall;
var newName;

var clearBtn = document.createElement("BUTTON");
var text = document.createTextNode("Clear stored details");
clearBtn.appendChild(text);
clearBtn.id = "clearBtn";
document.getElementById('ProgressBarPanel').append(clearBtn);
clearBtn.onclick = function() {clearStorage()};

var hall_id = null; var name_id = null;

debugger;
if (document.getElementById('q1') && document.getElementsByTagName('fieldset')[1].getElementsByTagName('legend')[0].innerHTML == "Question 1") {
	hall_id = document.getElementsByClassName('Question')[0].childNodes[1].childNodes[1].childNodes[0].childNodes[1].id;
	name_id = null;
}
else if (document.getElementsByTagName('fieldset')[0].getElementsByTagName('legend')[0].innerHTML == "Question 2") {
	name_id = document.getElementsByClassName('Question')[0].childNodes[1].childNodes[1].childNodes[0].childNodes[1].id;
	hall_id = null;
}

saveData();


function saveData() {
	chrome.storage.sync.get('name', function(y) {
		debugger;
		if (y.name === undefined) {
			var selection = "";
		}
		else {
			getData();
		}
	})
}

function getData() {
	chrome.storage.sync.get('hall', function(x) {
		debugger;
		hall = x.hall;
		chrome.storage.sync.get('name', function(y) {
			debugger;
			name = y.name;
			run();
		});
	});
}

function run() {
    debugger;
    if (document.getElementById(hall_id)) {
        document.getElementById(hall_id).value = hall;
        document.getElementById('NextButton').click();
    }
    
    if (document.getElementById(name_id)) {
        document.getElementById(name_id).value = name;
        document.getElementById('NextButton').click();
    }
    
    if (document.getElementById('q1_36525357')){
        document.getElementById('q1_36525357').click();
    }
    
    if (document.getElementById('q2_36525361')){
        document.getElementById('q2_36525361').click();
    }    
    
};

function clearStorage() {
	console.log('Storage just cleared!');
	chrome.storage.sync.clear();
}

document.getElementById('NextButton').onclick = function() {
	debugger;
	if (document.getElementById(hall_id)) {
        newHall = document.getElementById(hall_id).value;
        chrome.storage.sync.set({'hall' : newHall}, function(){});
    }

    else if (document.getElementById(name_id)) {
        newName = document.getElementById(name_id).value;
        chrome.storage.sync.set({'name' : newName}, function(){});
    }
};