$(function() {

  var outerShell = $("<div class='outer-shell'></div>");
  var innerShell = $("<div class='inner-shell'></div>");
  var leftLabels = $("<div class='left-labels'><li>PM</li><li>AUTO</li></div>")
  var clockScreen = $("<div class='clock-screen'></div>");
  var ampm = $("<div class='ampm'><li></li><li>&bull;</li></div>");
  var clockText = $("<div class='clock-text'>12:17</div>")
  var amLabel = $("<span class='am-label'><span class='freq'></span></span>")
  var pmLabel = $("<span class='pm-label'><span class='freq'></span></span>")

	
  outerShell.appendTo(".container");
  innerShell.appendTo(outerShell);
  leftLabels.appendTo(innerShell);
  clockScreen.appendTo(innerShell);
  ampm.appendTo(clockScreen);
  clockText.appendTo(clockScreen);
  amLabel.appendTo(innerShell);
  pmLabel.appendTo(innerShell);
});
