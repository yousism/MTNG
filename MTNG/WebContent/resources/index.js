function isNumber(n) {
    return n && !isNaN(parseFloat(n)) && isFinite(n);
}

function surveyValidateQuestion(s, options) {
    if (options.name == "times") {
    	for (i in options.value) {
    		var tV = options.value[i];
    		var fromDate = new Date(tV.fromDate + ' ' +  tV.fromHour + ':' + tV.fromMinute);
        	var toDate = new Date(tV.toDate + ' ' +  tV.toHour + ':' + tV.toMinute);
        	if (fromDate > toDate) {
        		options.error = "Please ensure starting times are before ending times";
        	}
    	}
    }
}

Survey.Survey.cssType = "bootstrap";

var surveyJSON = {
	"pages" : [{
        "name" : "page1", 
        questions: [ {
                type: "text",
                name: "eventName",
                title: "Please type the event name",
                isRequired: true,
            }, {
                type: "text",
                name: "locationName",
                title: "Please type the location name",
                isRequired: true
            }, {
                type: "text",
                name: "email",
                title: "Please type your e-mail",
                isRequired: true,
                validators: [
                    {
                        type: "email"
                    }
                ]
            }
        ]
    }, {
		"name" : "page2",
		questions : [ {
			type : "matrixdynamic",
			name : "times",
			title : "Select time options:",
			validators: [
                {
                    type: "mytextvalidator"
                }
            ], 
			columns : [ {
				"name" : "fromDate",
				"title" : "Starting:",
				"cellType" : "text",
				"isRequired" : true,
				"inputType" : "date"
			}, {
				"name" : "fromHour",
				"title" : "Hour:",
				"isRequired" : true,
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
				"name" : "fromMinute",
				"title" : "Minutes:",
				"cellType" : "dropdown",
				"isRequired" : true,
				"choices" : [ "0", "15", "30", "45" ]
			}, {
				"name" : "toDate",
				"isRequired" : true,
				"title" : "Ending:",
				"cellType" : "text",
				"inputType" : "date"
			}, {
				"name" : "toHour",
				"title" : "Hour:",
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
				"name" : "toMinute",
				"title" : "Minutes:",
				"cellType" : "dropdown",
				"isRequired" : true,
				"choices" : [ "0", "15", "30", "45" ]
			} ]
		} ]
	} ]
}

var widget = {
	    name: "datepicker",
	    htmlTemplate: "<input class='widget-datepicker' type='text' style='width: 100%;'>",
	    isFit : function(question) { return question.getType() === 'text' && question.inputType === 'date'; },
	    afterRender: function(question, el) {

	        var widget = $(el).find('.widget-datepicker').datepicker({dateFormat: question.dateFormat});

	        widget.on("change", function (e) {
	            question.value = $(this).val();
	        });
	        question.valueChangedCallback = function() {
	            widget.datepicker('setDate', new Date(question.value));
	        }
	        widget.datepicker('setDate', new Date(question.value || Date.now));
	    }
	}
	Survey.CustomWidgetCollection.Instance.addCustomWidget(widget);

var survey = new Survey.Model(surveyJSON);

survey.onComplete.add(function (result) {
	document.querySelector('#surveyElement').innerHTML += result.data.locationName + "<br>" + result.data.eventName + "<br>" + result.data.email + "<br>";
	var rDT = result.data.times;
    for (i in rDT) {
    	var fromDate = new Date(rDT[i].fromDate + ' ' +  rDT[i].fromHour + ':' + rDT[i].fromMinute);
    	var toDate = new Date(rDT[i].toDate + ' ' +  rDT[i].toHour + ':' + rDT[i].toMinute);
        document.querySelector('#surveyElement').innerHTML += "From: " + fromDate + "  to: " + toDate + "<br>";
    }
});

$("#surveyContainer").Survey({
	model : survey,
	onValidateQuestion: surveyValidateQuestion
});

