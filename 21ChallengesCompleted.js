//Challenge #1
//function that turn on the property powerOn on the ship object. 

function powerOn(){
  
  if(!ship.powerOn) ship.powerOn = true;  
}

powerOn();

//challenge #2
//count the number of modules in the availableModules array

function countModules (){
  
  return availableModules.length;
}

//challenge #3
//count the essential modules in the availableModules array

function countEssential(){
  
  var essential = 0;
  
  for(var i = 0; i < countModules(); i++){
    if(availableModules[i].essential === true) essential++;
  }
  
  return essential;
}

countEssential();

//chanllenge #4
// 3 essentials modules

//loadModule : add a module to the modules array
// Param index: where the module is in the availableModules array
function loadModule(index) {
  
  //add in the challenge #8
  if(!availableModules[index].essential){
    availableModules[index].essential = true;//change essential property to true
  }
  
  ship.modules.push(availableModules[index]);
  
}

//function to loop over availbleModules to find life-support name module.
//then add those module into the modules array by calling loadModule
function findLifeSupportModule(){
  
  for(var i = 0; i < availableModules.length; i++){
    if(availableModules[i].name == "life-support") {
      availableModules[i].enabled = true; //enable the module first
      loadModule(i); //load module into modules array
    }
  }
}

//call the function
findLifeSupportModule();

//challenge #5
//find the "propulsion" module and load it into ship's system

//find a module by is name in the availableModules array (into those that are essential)
// param : name of the modules
function findModuleIndex(name){
    
    for(var i = 0; i < availableModules.length; i++){
      if(availableModules[i].name == name ){
        return i;
      }
    }
}

//load module
loadModule(findModuleIndex("propulsion"));
loadModule(findModuleIndex("navigation")); // challenge #6

//challenge #7
//function reset Larry that prompt larry to quack 10 times
//use LARRY.quack() fucntion

function resetLARRY(){
  let times = 10; //number of quack
  
  for(var i = 0; i < 10; i++){
    LARRY.quack();
  }
}

resetLARRY();

//challenge #8
//load «communication» module 
//change in the loadModule function to change the essential property to true 

loadModule(findModuleIndex("communication"));

//challenge #9
//send a message of navigation object into JSON with JSON.stringigy() native 
// js function

function setMessage(){
  //set navigation object to JSON
  var messageJSON = JSON.stringify(navigation);
  
  //asign message to message property in radio object
  radio.message = messageJSON;
  
}

//execution
setMessage();

//challenge #10
//set the beacon property to true on the radio object

function activateBeacon(){
  radio.beacon = true;
}

//execution
activateBeacon();

//challenge #11
//set the right frequency using thatt 
//formula : (high + low)/2

function setFrequency(){
  radio.frequency = (radio.range.high + radio.range.low)/2
}

//challenge #12
//Set x,y and z value of the navigation
//object to 0

function initialize(){
  navigation.x = 0;
  navigation.y = 0;
  navigation.z = 0;
}

//challenge #13
//calibrate x in navigation system

/*
    Loop from 1 - 12
    Call the built-in checkSignal() function each time, and assign the result to a variable called signal
    Make sure your signal variable is not undefined
    If the value is defined, set the navigation object's x property to that value
    Break out of the loop!
*/
function calibrateX(){
  for(var i = 1; i <= 12; i++){
    var signal = checkSignal();
    
    if(signal !== undefined) {
      navigation.x = signal;
      break;
    }
  }
}

//execution
//remove at challenge #15
//calibrateX();

//challenge #14
//calibrate Y and Z by looping 1 to 60 and use checkSignal()

function calibrateY(){
  for(var i = 1; i <=60; i++){
    var signal = checkSignal();
    
    if(signal !== undefined){
      navigation.y = signal;
      break;
    }
  }
}

function calibrateZ(){
  for(var i = 1; i <=60; i++){
    var signal = checkSignal();
    
    if(signal !== undefined){
      navigation.z = signal;
      break;
    }
  }
}

//execution 
//remove at challenge #15
//calibrateY();
//calibrateZ();

//challenge #15
//function calibrate() that call the x,y and z calibration function

function calibrate(){
  calibrateX();
  calibrateY();
  calibrateZ();
  
}

//challenge #16
//function setSpeed
//param : speed (String) 

function setSpeed(speed){
  let spd = parseInt(speed, 10);
  if(spd >= 0){
    navigation.speed = spd;
  } else return;
  
}

//chllenge # 17
//activate antenna

function activateAntenna(){
  //turn property active to true
  ship.antenna.active = true;
}

//execution
//remove at challenge #19
//activateAntenna();

//challenge #18.
//function sendBroadcast() to send a message

function sendBroadcast(){
  
  for(let i = 0; i < 100; i++){
    broadcast();
  }
}

//execution
//remove at challenge #19
//sendBroadcast();

//challenge #19
//configure the radio broadcast
/*
Your function will need to follow a precise order:

    set the frequency on the radio
    set the antenna to active
    send your announcement
*/

function configureBroadcast(){
  setFrequency();
  activateAntenna();
  sendBroadcast();
}

//execution
configureBroadcast();

//challenge #20
//decrypte message by remplacing number with vowel
/*
  0 --> o
  1 --> i
  2 --> u
  3 --> e
  4 --> a
  5 --> y
*/

function decodeMessage(message){
  var encrypted = message.split('');
  
  for(let i = 0; i < encrypted.length; i++){
    
    switch(encrypted[i]){
      case "0" : 
        encrypted[i] = "o";
        break;
      case "1" :
        encrypted[i] = "i";
        break;
      case "2" :
        encrypted[i] = "u";
        break;
      case "3" : 
        encrypted[i] = "e";
        break;
      case "4" :
        encrypted[i] = "a";
        break;
      case "5" :
        encrypted[i] = "y";
        break;
      default : 
        break;
    }
    
  }
  
  return encrypted.join("");
  
}

//challenge #21 (FINAL ONE)
//function return to earth
/*
  
    + Call the built-in broadcast() function three times. Each of these calls should pass either "x", "y" or "z" as a parameter.
      -Store the response from each broadcast() call in it's own variable (The broadcast() function returns a coded-message from 
       Earth with the correct coordinate to return home in HEX! Check out the hints for more on this)
    + Decode the returned message using the decodeMessage() function you wrote earlier
    + Change the decoded hex-coordinate to an integer using parseInt()
    + Set each of the navigation object's x, y and z parameters to the integer coordinates
*/

function returnToEarth(){
  
  //call three times broadcast()
  var broadcastX = broadcast("x");
  var broadcastY = broadcast("y");
  var broadcastZ = broadcast("z");
  
  //decode 
  broadcastX = decodeMessage(broadcastX);
  broadcastY = decodeMessage(broadcastY);
  broadcastZ = decodeMessage(broadcastZ);
  
  //parse hex-coordinate to an integer 
  broadcastX = parseInt(broadcastX, 16);
  broadcastY = parseInt(broadcastY, 16);
  broadcastZ = parseInt(broadcastZ, 16);
  
  //set navigation object to integer coordinates
  navigation.x = broadcastX;
  navigation.y = broadcastY;
  navigation.z = broadcastZ;
  
}

//execution
returnToEarth();
