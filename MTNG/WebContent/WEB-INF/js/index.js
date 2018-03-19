Survey.Survey.cssType = "bootstrap";

var json = {pages:[{name:"page1",elements:[{type:"matrixdynamic",name:"question1",columns:[{ name: "date", cellType: "text", inputType: "date", title: "Starting:", dateFormat: "mm/dd/yy" },{name:"Hours",cellType:"dropdown",isRequired:true,choices:[{value:"0",text:"12 AM"},{value:"1",text:"1 AM"},{value:"2",text:"2 AM"},{value:"3",text:"3 AM"},{value:"4",text:"4 AM"},{value:"5",text:"5 AM"},{value:"6",text:"6 AM"},{value:"7",text:"7 AM"},{value:"8",text:"8 AM"},{value:"9",text:"9 AM"},{value:"10",text:"10 AM"},{value:"11",text:"11 AM"},{value:"12",text:"12 PM"},{value:"13",text:"1 PM"},{value:"14",text:"2 PM"},{value:"15",text:"3 PM"},{value:"16",text:"4 PM"},{value:"17",text:"5 PM"},{value:"18",text:"6 PM"},{value:"19",text:"7 PM"},{value:"20",text:"8 PM"},{value:"21",text:"9 PM"},{value:"22",text:"10 PM"},{value:"23",text:"11 PM"}]},{name:"Minutes",cellType:"dropdown",isRequired:true,choices:["0","15","30","45"]},{ name: "date", cellType: "text", inputType: "date", title: "Ending:", dateFormat: "mm/dd/yy" },{name:"Hours",cellType:"dropdown",isRequired:true,choices:[{value:"0",text:"12 AM"},{value:"1",text:"1 AM"},{value:"2",text:"2 AM"},{value:"3",text:"3 AM"},{value:"4",text:"4 AM"},{value:"5",text:"5 AM"},{value:"6",text:"6 AM"},{value:"7",text:"7 AM"},{value:"8",text:"8 AM"},{value:"9",text:"9 AM"},{value:"10",text:"10 AM"},{value:"11",text:"11 AM"},{value:"12",text:"12 PM"},{value:"13",text:"1 PM"},{value:"14",text:"2 PM"},{value:"15",text:"3 PM"},{value:"16",text:"4 PM"},{value:"17",text:"5 PM"},{value:"18",text:"6 PM"},{value:"19",text:"7 PM"},{value:"20",text:"8 PM"},{value:"21",text:"9 PM"},{value:"22",text:"10 PM"},{value:"23",text:"11 PM"}]},{name:"Minutes",cellType:"dropdown",isRequired:true,choices:["0","15","30","45"]}],choices:[1,2,3,4,5]}]}]}

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

var model = new Survey.Model(json);
window.survey = model;
survey.onComplete.add(function (result) {
        document.querySelector('#surveyResult').innerHTML = "result: " + JSON.parse(result.data);
    });
$("#surveyElement").Survey({
    model:model
});
