// $('body').css("background-color", "yellow");


//IIFE = immediately invoked f/n expression 
$("#btnGetAnimal").on("click", function(){
  //get the user name
  let bakerName = $("#bakerName").val(); 
  //var variableName =  ... let (const) 
  
  $("#greetingArea").text("Hi there, " + bakerName + "!");  
  //give them a personalized greeting
  
  let randomAnimal = spiritAnimals[(Math.floor(Math.random() * spiritAnimals.length))];
  
  $("#animalArea").text("Your spirit animal is: " + randomAnimal)
  
} )


let spiritAnimals =["🐈","🐈","😺","😼","🐧", "file not found"]
//next, also tell spirit animal