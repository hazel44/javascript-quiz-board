var add = function(answer1, answer2, answer3, answer4,  answer5){
  return total = answer1 + answer2 + answer3 + answer4 +answer5
}

 $(document).ready(function(){
  $("form .form-group").submit(function(event){
  event.preventDefault();

  var answer1 = parseInt($("input:radio[name = answer1]:checked").val());
  var answer2 = parseInt($("input:radio[name = answer2]:checked").val());
  var answer3 = parseInt($("input:radio[name = answer3]:checked").val());
  var answer4 = parseInt($("input:radio[name = answer4]:checked").val());
  var answer5 = parseInt($("input:radio[name = answer5]:checked").val());

  var total = answer1 + answer2 + answer3 + answer4 + answer5;
  $("form").hide();
  $("button").hide();
  $("#results").text(" Your score is " + total + " out of 25 ")
  document.getElementById("results").innerHTML="Your score is" + total +"out of 25";

});
});
