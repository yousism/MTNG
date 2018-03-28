Survey.Survey.cssType = "bootstrap";

var surveyJSON = {
	"pages" : [ {
		"name" : "page1",
		"elements" : [ {
			"type" : "text",
			"name" : "name",
			"title" : "Enter the event name:"
		}, {
			"type" : "text",
			"name" : "location",
			"title" : "Enter the event location:"
		}, {
			"type" : "matrixdynamic",
			"name" : "pollTimeList",
			"title" : "Select time options:",
			"columns" : [ {
				"name" : "startdate",
				"title" : "Starting:",
				"cellType" : "text",
				"inputType" : "date"
			}, {
				"name" : "starthours",
				"cellType" : "dropdown",
				"isRequired" : true,
				"choices" : [ {
					"value" : "0",
					"text" : "12 AM"
				}, {
					"value" : "1",
					"text" : "1 AM"
				}, {
					"value" : "2",
					"text" : "2 AM"
				}, {
					"value" : "3",
					"text" : "3 AM"
				}, {
					"value" : "4",
					"text" : "4 AM"
				}, {
					"value" : "5",
					"text" : "5 AM"
				}, {
					"value" : "6",
					"text" : "6 AM"
				}, {
					"value" : "7",
					"text" : "7 AM"
				}, {
					"value" : "8",
					"text" : "8 AM"
				}, {
					"value" : "9",
					"text" : "9 AM"
				}, {
					"value" : "10",
					"text" : "10 AM"
				}, {
					"value" : "11",
					"text" : "11 AM"
				}, {
					"value" : "12",
					"text" : "12 PM"
				}, {
					"value" : "13",
					"text" : "1 PM"
				}, {
					"value" : "14",
					"text" : "2 PM"
				}, {
					"value" : "15",
					"text" : "3 PM"
				}, {
					"value" : "16",
					"text" : "4 PM"
				}, {
					"value" : "17",
					"text" : "5 PM"
				}, {
					"value" : "18",
					"text" : "6 PM"
				}, {
					"value" : "19",
					"text" : "7 PM"
				}, {
					"value" : "20",
					"text" : "8 PM"
				}, {
					"value" : "21",
					"text" : "9 PM"
				}, {
					"value" : "22",
					"text" : "10 PM"
				}, {
					"value" : "23",
					"text" : "11 PM"
				} ]
			}, {
				"name" : "startminutes",
				"cellType" : "dropdown",
				"isRequired" : true,
				"choices" : [ "0", "15", "30", "45" ]
			}, {
				"name" : "enddate",
				"title" : "Ending:",
				"cellType" : "text",
				"inputType" : "date"
			}, {
				"name" : "endhours",
				"cellType" : "dropdown",
				"isRequired" : true,
				"choices" : [ {
					"value" : "0",
					"text" : "12 AM"
				}, {
					"value" : "1",
					"text" : "1 AM"
				}, {
					"value" : "2",
					"text" : "2 AM"
				}, {
					"value" : "3",
					"text" : "3 AM"
				}, {
					"value" : "4",
					"text" : "4 AM"
				}, {
					"value" : "5",
					"text" : "5 AM"
				}, {
					"value" : "6",
					"text" : "6 AM"
				}, {
					"value" : "7",
					"text" : "7 AM"
				}, {
					"value" : "8",
					"text" : "8 AM"
				}, {
					"value" : "9",
					"text" : "9 AM"
				}, {
					"value" : "10",
					"text" : "10 AM"
				}, {
					"value" : "11",
					"text" : "11 AM"
				}, {
					"value" : "12",
					"text" : "12 PM"
				}, {
					"value" : "13",
					"text" : "1 PM"
				}, {
					"value" : "14",
					"text" : "2 PM"
				}, {
					"value" : "15",
					"text" : "3 PM"
				}, {
					"value" : "16",
					"text" : "4 PM"
				}, {
					"value" : "17",
					"text" : "5 PM"
				}, {
					"value" : "18",
					"text" : "6 PM"
				}, {
					"value" : "19",
					"text" : "7 PM"
				}, {
					"value" : "20",
					"text" : "8 PM"
				}, {
					"value" : "21",
					"text" : "9 PM"
				}, {
					"value" : "22",
					"text" : "10 PM"
				}, {
					"value" : "23",
					"text" : "11 PM"
				} ]
			}, {
				"name" : "endminutes",
				"cellType" : "dropdown",
				"isRequired" : true,
				"choices" : [ "0", "15", "30", "45" ]
			} ],
			"choices" : [ 1, 2, 3, 4, 5 ]
		} ]
	} ]
}

function sendDataToServer(survey) {
	// send Ajax request to your web server.
	alert("The results are:" + JSON.stringify(survey.data));
}

function createPoll(survey) {
	alert('Inside createPoll js function');
	var poll = JSON.stringify(survey.data);
	alert(poll);
	// Send the request
	$.ajax({
		url : "http://localhost:8080/MTNG/createPoll",
		type : 'POST',
		data : poll,
		contentType : 'application/json',
		dataType : 'json',
		success : function(data) {
			alert(data);
		},
		error : function(data, status, er) {
			alert("error: " + data + " status: " + status + " er:" + er);
		}
	});

}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
	model : survey,
	onComplete : createPoll
});