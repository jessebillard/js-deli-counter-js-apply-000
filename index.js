//funkshion 1...Green LLLIIIGGGHHHTTT
var katzDeli = [];
var katzDeliLine = ['Steven', 'Blake', 'Avi'];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  var message = `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
  return message;
}
console.log(takeANumber(katzDeliLine, 'Jeff'));
console.log(takeANumber(katzDeli, 'Tony'));


//funkshion 2...it's goodie

var emptyDeli = [];
var otherDeli = ['Steven', 'Blake', 'Avi'];

function nowServing(otherDeli) {
  if (otherDeli.length > 0) {
    var message = `Currently serving ${otherDeli[0]}.`;
    console.log('in nowServing', otherDeli.shift())
    
    return message;
  } else if (emptyDeli.length === 0) {
    return 'There is nobody waiting to be served!';
  } 
}
console.log(nowServing(otherDeli));
console.log(nowServing(emptyDeli));

//funkshion 3...GREEEEENNN LIIIIGGGHHHHHTTTT

var line = [];
var fullLine = ['Bill', 'Jane', 'Ann'];

function currentLine(line) {
  if (line.length === 0) {
     var emptyMessage = 'The line is currently empty.';
     return emptyMessage;
  }
  
  else if (line.length > 0) {
    var message = 'The line is currently: '
    for(let i = 0; i < line.length; i++) {
     var comma = []
     comma.push(`${(i + 1)}. ${line[i]}`)
    }
    return message + comma.join(', ')
     // 1. ${fullLine[0]}, 2. ${fullLine[1]}, 3. ${fullLine[2]}`;
    
  } 
} 



