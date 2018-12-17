var todayDate = new Date().toISOString().substring(0,10);
console.log(todayDate);


$("#submitBtn").click(function(){
  var key = firebase.database().ref().child("feedbacks").push().key;
  var date = new Date();
  var postInfo = {
    firstName: $("#firstName").val(),
    key: key,
    lastName: $("#lastName").val(),
    country : $("#country").val(),
    date: todayDate,
    topic : $("#topic").val(),
    content : $("#content").val(),
    views: 0

  };

  var finalPost = {};
  finalPost[key] = postInfo;

  firebase.database().ref("feedbacks").update(finalPost);

  setTimeout(doSomething, 3000);
function doSomething() {
   window.location = "Feedback submitted.html";
}


});
