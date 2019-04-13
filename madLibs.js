 function madLib()
  {
    var x;
for (x = 0; x < 9; x++) { 
  $("#"+ x + "o").text($("#" + x + "i").val());
}
}
    $("#1o").text($("#1i").val());

    //Does this need to be here to avoid page getting..."cached"

    function transMadLibsGather()
    {

      for (x = 1; x < 9; x++) { 
      localStorage.setItem("localInput" + x, $("#" + x + "i").val());
      console.log(localStorage.getItem("localInput" + x));
    }
    //well, it works, but why do I need a different for loop here?
  }

    //Does this need to be here to avoid page getting..."cached"

    function transMadLibsGather()
    {

      for (x = 1; x < 10; x++) { 
      localStorage.setItem("localInput" + x, $("#" + x + "i").val());
      console.log(localStorage.getItem("localInput" + x));
    }
    //well, it works, but why do I need a different for loop here?
  }

function transMadLibsDistribute(){
  for (x = 1; x < 10; x++) { 
    var input = localStorage.getItem("localInput" + x);

      // console.log(localStorage.getItem("localInput" + x));

      console.log(input);

      $("#" + x + "o").text(input);
    }
  }


// function madLib()
//   {
//     var x;
// for (x = 0; x < 8; x++) { 
//   $("#"+ x + "o").text($("#" + x + "i").val());
// }

//WHAT I NEED IS A TRANS-PAGE VERSION TAHT GOES THROUGH THE INPUT VALUES AND PLACES THEM IN
//WHAT?  NEW VARIABLES?  LOCAL STORAGE?  I GUESS LOCAL STORAGE.  MAYBE ITS NOT NECESSARY
//TO HAVE A SEPERATE SCRIPT FILE.  JUST IN INDEX.HTML YOU STORE THEM, IN RESULT.HTML YOU PRINT
//THEM OUT