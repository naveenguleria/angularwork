requirejs.config({
  paths: {
    app: "./",
    knockout:
      "http://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.2/knockout-min",
    Survey: "https://surveyjs.azureedge.net/1.0.44/survey.ko",
    SurveyEditor: "https://surveyjs.azureedge.net/1.0.44/surveyeditor"
  },
  map: {
    "*": {
      "survey-knockout": "Survey"
    }
  }
});

requirejs(["main"]);
