var todayDate = new Date().toISOString().substring(0,10);
console.log(todayDate);


$("#submitBtn").click(function(){
  var key = firebase.database().ref().child("posts").push().key;
  var date = new Date();
  var postInfo = {
    comments: ["Skip"],
    key: key,
    nickname: $("#nickname").val(),
    country : $("#country").val(),
    date: todayDate,
    topic : $("#topic").val(),
    content : $("#content").val(),
    views: 0

  };

  var finalPost = {};
  finalPost[key] = postInfo;

  firebase.database().ref("posts").update(finalPost);

  setTimeout(doSomething, 3000);
function doSomething() {
   window.location = "subbmition.html";
}


});
