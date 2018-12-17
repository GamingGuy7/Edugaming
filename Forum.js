var postInfo = [];

firebase.database().ref().child("posts").once("value", function(data){
  $.each(data.val(), function(i, post){
   var onePost = {
     topic: post.topic,
     date: post.date,
     country: post.country,
     content: post.content,
     nickname: post.nickname,
     views: post.views,
     key: post.key,
     comments: post.comments
   };
   postInfo.push(onePost);
  });
});

var x = 0;


setTimeout(delayaLittle, 4000);
function delayaLittle() {
  for (var i = 1; i < postInfo.length; i++) {
    console.log(postInfo[i].topic);
    $("#tableBody").append( '<tr> <td>' + '<a href="javascript:void(0);" id="' + i + '" class="openWindow" onclick="openWindowFunc(' + i + ')">' + postInfo[i].topic + '</a> </td> <td>'
    + postInfo[i].nickname + "</td> <td>"
    + postInfo[i].country + "</td> <td>"
    + postInfo[i].date + "</td> <td>"
    + postInfo[i].views + "</td> </tr>" );
    //console.log("i now is " + i);
  }
 //console.log(postInfo.length);
}



  function openWindowFunc(i){
  //var test =  $("#"+ i);
  //console.log(test);
  x = i;
  $("#discussion").show();
  $("#displayTopic").html('<h1 class="topicsH1">' + postInfo[i].topic + '</h1>');
  $("#displayNickname").html('posted by: ' + postInfo[i].nickname + '<br>');
  $("#displayDate").html('date posted: ' + postInfo[i].date);
  $("#displayContent").html('<div class="contentBox"> ' + postInfo[i].content + ' </div>');
  firebase.database().ref().child("posts/" + postInfo[i].key + "/views").set(++postInfo[i].views);

  var commentsSize = postInfo[i].comments.length;
  console.log(commentsSize + " " + x);
  for (var f = 1; f < commentsSize; f++) {
    console.log(postInfo[i].comments[f]);
  $("#displayComments").append('<div class="eachComment"> ' + postInfo[i].comments[f] + ' </div> <br><hr class="commentLine"><br>');
  }
  //postInfo[i].views += 1;
  //console.log( i );

}

$("#closeIcon").click(function(){
  $("#discussion").hide();
});

$(window).click(function(event){
  if (event.target == discussion) {
  $("#discussion").hide();
  }
});


$("#commentBtn").click(function(){

  var getComment = $("#typeComment").val();
  var arrayy = [];

  for (var i = 0; i < postInfo[x].comments.length+1; i++)

    if(i == postInfo[x].comments.length){
      arrayy.push(getComment);
      firebase.database().ref().child("posts/" + postInfo[x].key + "/comments").set(arrayy);
      $("#typeComment").val("");
      $("#displayComments").append(arrayy[i] + '<br>');
      //console.log(arrayy[1])
    }
    else{
      arrayy[i] = postInfo[x].comments[i];
    }

  });





//console.log(postInfo);
