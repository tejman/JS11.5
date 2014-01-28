$(function() {
  var clock = function() {
    $(".container").empty();

    var myTime = new Date();
    
    if (myTime.getMinutes()<10) {
      var min = "0"+myTime.getMinutes().toString();
    }
    else {
      var min = myTime.getMinutes();
    };

    if (myTime.getHours()>12) {
      var hour = (myTime.getHours()-12);
      var pm = true;
    }
    else {
      var hour = myTime.getHours();
      var pm = false;
    };

    var currentTime = hour+":"+min;


    var outerShell = $("<div class='outer-shell'></div>");
    var innerShell = $("<div class='inner-shell'></div>");
    var leftLabels = $("<div class='left-labels'><li>PM</li><li>AUTO</li></div>")
    var clockScreen = $("<div class='clock-screen'></div>");
    var ampm = $("<div class='ampm'><li>{0}</li><li></li></div>".supplant([pm ? "&bull;" : ""]));
    var clockText = $("<div class='clock-text'>{0}</div>".supplant([currentTime]));
    var amLabel = $("<div class='am-label'>AM<pre class='freq'></pre></div>")
    var pmLabel = $("<div class='pm-label'>FM<pre class='freq'></pre></div>")

    var amFreq = "   53    60    70    90    110    140    170"
    var pmFreq = "   88    92    96    102    106    108"

  	
    outerShell.appendTo(".container");
    innerShell.appendTo(outerShell);
    leftLabels.appendTo(innerShell);
    clockScreen.appendTo(innerShell);
    ampm.appendTo(clockScreen);
    clockText.appendTo(clockScreen);
    amLabel.appendTo(innerShell);
    pmLabel.appendTo(innerShell);
    amLabel.find(".freq").text(amFreq);
    pmLabel.find(".freq").text(pmFreq);

    // console.log(myTime.getSeconds());

  };

  clock();
  setInterval(clock, 5000);

  
});
