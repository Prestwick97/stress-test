$(document).ready(function() {
  $("#stress-survey").submit(function(event) {
    event.preventDefault();
    
    var score = 0;
    $("input:checkbox[name=warning-signs]:checked").each(function() {
      score += 1;
    })
    $("input:checkbox[name=health-symptoms]:checked").each(function() {
      score += 1;
    })
    $("input:checkbox[name=coping-methods]:checked").each(function() {
      score += 1;
    })
    console.log(score);
    if(score > 9) {
      $("#seek-help").show();
    } else if(score > 4 && score <= 9) {
      $("#need-work").show();
    } else {
      $("#doing-good").show();
    }
    $("#stress-survey")[0].reset();
  })
})