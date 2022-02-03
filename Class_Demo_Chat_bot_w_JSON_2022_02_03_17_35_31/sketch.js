let data;
let input, sendBttn;
let answer = "Ask about the Chatbot's for Art's Sake"
function preload(){
  data = loadJSON("Chatbot.json");
}
function setup() {
  createCanvas(400, 400);
  console.log(data)
  
  // input field and button
  input = createInput()
  input.position(50,50)
  sendBttn = createButton("Send Message")
  sendBttn.position(50,100); 
// if the button is pressed 
  sendBttn.mousePressed(chat);
}

function chat(){
  console.log(input.value());
  let inputStr = input.value().toLowerCase();
  console.log(inputStr);
  // loop through brain array in JSON file 
  // once we find a match, break out the loop and give response
  // if there is no match, return catchall phrase
  
  outerloop: for(let i = 0; i<data.brain.length; i++)
    innerloop1: for(let j = 0; j<data.brain[i].triggers.length;j++)
      if(inputStr.indexOf(data.brain[i].triggers[j]) !== -1){
         // we have a match
          answer = random(data.brain[i].responses)
          break outerloop;
         }
      else{
        answer = random(data.catchall)
      }
}

function draw() {
  background(220);
  text(answer, 50, 150,200)
}