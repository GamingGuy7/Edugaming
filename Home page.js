
     var esports_on_off = true;
    $("#esports-readMore").click(function(){

      $("#esports-moreInfo").slideToggle("9000", function(){
        if (esports_on_off) {
          $("#esports-readMore").text("Show less");
          esports_on_off = false;
        }
        else {
          $("#esports-readMore").text("Read more");
          esports_on_off = true;
        }

      });
    });



    var life_on_off = true;
   $("#life-readMore").click(function(){

     $("#life-moreInfo").slideToggle("59000", function(){
       if (life_on_off) {
         $("#life-readMore").text("Show less");
         life_on_off = false;
       }
       else {
         $("#life-readMore").text("Read more");
         life_on_off = true;
       }

     });
   });


   var simulators_on_off = true;
  $("#simulators-readMore").click(function(){
    $("#simulators-moreInfo").slideToggle("9000", function(){
      if (simulators_on_off) {
        $("#simulators-readMore").text("Show less");
        console.log("simulator_on_off");
        simulators_on_off = false;
      }
      else {
        $("#simulators-readMore").text("Read more");
        simulators_on_off = true;
      }

    });
  });
