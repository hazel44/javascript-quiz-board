var sum = 0;
function score (userValue) {
  var names = ["Q1","Q2","Q3","Q4","Q5"];
  names.forEach(function(name){
    var userValue = $("input:radio[name ="+ name +"]:checked").val();
    if (userValue ==="5"){
      sum+=5;
    }
  });
}
if (sum <=10){
  $(".name-display").text("Poorly done. Retake the test!");
}
else {
  $("name-display").text("fairly passed.");
}
$(".scoreDisplay").text(sum +"/25");
