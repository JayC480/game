/*global $*/
var DATE_NAME = '';
var DATE_STATE = 0;
var CHOICE_ONE = 1;
var CHOICE_TWO=2;
var CHOICE_THREE=3;
var CHOICE_FOUR = 4;
var CHOICE_FIVE = 5;
var CHOICE_SIX = 6;
var WIN_STATE= 50;
var RESTART_STATE=100;

var programState= DATE_STATE;


$(".choiceOne").click(function(){
    if(programState===DATE_STATE){
      $(".choiceThree").hide();
       $(".choiceFour").hide();
      DATE_NAME= "Howl";
        $("#choices").append("You chose "+ DATE_NAME);
        nextLevel("Yes, Obviously","No",DATE_NAME+" wants to take you for a magical adventure. Do you want to go?");
        programState = CHOICE_ONE;
    }else if(programState===CHOICE_ONE){
        $("#choices").append("<br> You chose to go on a magical adventure with "+ DATE_NAME);
          nextLevel("Fight Dragons","Find a lost treasure"," What kind of adventure?");
        programState=CHOICE_TWO;
    }else if(programState===CHOICE_TWO){
        $("#choices").append("<br>You chose to fight dragons. This was a mistake- you are not equipped to fight dragons. You got injured. Maybe next time choose something less intense");
         GameOver("Try again?");
    }else if(programState===RESTART_STATE){
        $("#choices").empty();
        $(".choiceTwo").show();
        nextLevel("Howl","Geto","Choose your date");
         $(".choiceThree").show();
      $(".choiceFour").show();
        programState = DATE_STATE;
    }else if(programState===CHOICE_THREE){
           $("#choices").append("<br> You chose to hold hands with " +DATE_NAME+ " They thought your nervousness was super cute. You make it through the jungle unscathed and find the treasure!");
          nextLevel("Take it all for yourself","Share It","What should you do with the treasure?");
        programState=CHOICE_FOUR;
    }else if(programState===CHOICE_FOUR){
           $("#choices").append("<br> You chose to take all the treasure for yourself. " +DATE_NAME+ " is very disappointed and they never speak to you again.");
          GameOver("Seriously?");
    }else if(programState===CHOICE_FIVE){
           $("#choices").append("<br>"+DATE_NAME+" puts the necklace on you. They remark that you look absolutely beautiful. The air is tense");
          nextLevel("Maybe a hug instead?","Go for it!","Lean in for a kiss?");
        programState=CHOICE_SIX;
    }else if(programState===CHOICE_SIX){
           $("#choices").append("<br>"+DATE_NAME+ "accepts your hug. It's nice. But maybe you both want something more?");
          GameOver("Try again?");
    }
});

 $(".choiceTwo").click(function(){
     if(programState===DATE_STATE){
        $(".choiceThree").hide();
       $(".choiceFour").hide();
       DATE_NAME= "Geto";
       $("#choices").append("You chose "+ DATE_NAME);
        nextLevel("Yes, Obviously","No",DATE_NAME+" wants to take you for a magical adventure. Do you want to go?");
        programState = CHOICE_ONE;
     }else if(programState===CHOICE_ONE){
          $("#choices").append("<br> You chose not to go on the adventure. Why? this is a dating sim! Now you'll die alone. Good job");
         GameOver("Try again?");
     } else if(programState===CHOICE_TWO){
        $("#choices").append("<br> You chose to look for a lost treasure. You and " + DATE_NAME + " board a ship to a secluded island. You arrive on the island and begin walking towards the treasure. The jungle is a bit hard to walk in.");
        nextLevel("Hold "+DATE_NAME+"'s Hand"," Walk on your own ","What should you do?");
        programState=CHOICE_THREE
     }else if(programState===CHOICE_THREE){
          $("#choices").append("<br> You chose to walk on your own, you trip over a branch and land in mud. Smooth moves- no one's gonna take you seriously like that!");
         GameOver("Try Again?");
     }else if(programState===CHOICE_FOUR){
           $("#choices").append("<br> You chose to share the treasure with " +DATE_NAME+ " They are so happy. The treasure is a box full of valuable items. There is a beautiful necklace. "+DATE_NAME+" offers to put it on you.");
          nextLevel("Yes, Yes oh my god yes","No I can do it myself.","Do you let them?");
        programState=CHOICE_FIVE;
    }else if(programState===CHOICE_FIVE){
           $("#choices").append("<br> You chose to put the necklace on yourself. The rest of the trip home is awkward.");
       GameOver("Try Again?");
    }else if(programState===CHOICE_SIX){
           $("#choices").append("<br> You and " +DATE_NAME + " share a passionate kiss");
      Winner();
    }
   else if(programState===RESTART_STATE){
        $("#choices").empty();
        $(".choiceTwo").show();
        nextLevel("Howl","Geto","Choose your date");
         $(".choiceThree").show();
      $(".choiceFour").show();
        programState = DATE_STATE;
    }
 });

$(".choiceThree").click(function(){
    if(programState===DATE_STATE){
      DATE_NAME= "Monika";
      $(".choiceThree").hide();
      $(".choiceFour").hide();
        $("#choices").append("You chose "+ DATE_NAME);
        nextLevel("Yes, Obviously","No",DATE_NAME+" wants to take you for a magical adventure. Do you want to go?");
        programState = CHOICE_ONE;
    } 
 });

$(".choiceFour").click(function(){
    if(programState===DATE_STATE){
      DATE_NAME= "Irina";
      $(".choiceThree").hide();
      $(".choiceFour").hide();
        $("#choices").append("You chose "+ DATE_NAME);
        nextLevel("Yes, Obviously","No",DATE_NAME+" wants to take you for a magical adventure. Do you want to go?");
        programState = CHOICE_ONE;
    }
 });

function GameOver(x){
    $("#story").hide();
    $("#caption").text(x);
    $(".choiceOne").text("Restart");
    setTimeout(function(){$("#story").show(); }, 1000); 
     $(".choiceTwo").hide();
     programState=RESTART_STATE;
}
function nextLevel(text1,text2,text3){
     $("#story").hide();
        $(".choiceOne").text(text1);
        $(".choiceTwo").text(text2);
        $("#caption").text(text3);
        setTimeout(function(){$("#story").show(); }, 1000);
  if(programState===RESTART_STATE){
      $(".choiceOne").append($('<img class="choiceImg" src="https://cdn.glitch.global/8c66f1a8-1e9c-4f2f-b260-6dd0875bb9d6/howl.jpg?v=1647216758612">'));
        $(".choiceTwo").append($('<img class="choiceImg" src="https://cdn.glitch.global/8c66f1a8-1e9c-4f2f-b260-6dd0875bb9d6/geto.jpg?v=1647216721499">'));
  }
    
}

function Winner(){
   $("#choices").empty();
  $("#choices").text("You found love with "+DATE_NAME);
  $("#caption").hide();
  $("#choices").append($('<br> <img class="winImg" src="https://cdn.glitch.global/8c66f1a8-1e9c-4f2f-b260-6dd0875bb9d6/wedding.jpg?v=1647220218526">'));
  $(".choiceOne").text("Go Again?");
  setTimeout(function(){$("#story").show(); }, 1000); 
  $(".choiceTwo").hide();
  programState=RESTART_STATE;
}