$(document).ready(function(){
  $("form#stress-survey").submit(function(event){
    event.preventDefault();
    $("#need-work").show();
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#need-work').append(workTransportationMode + "<br>");
    });
    $("#seek-help").show();
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#seek-help').append(funTransportationMode + "<br>");
        });
    $("#doing-good").show();
    $("input:checkbox[name=coping-methods]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#doing-good').append(funTransportationMode + "<br>");  
    });
    $('#stress-survey').hide();
  });
});