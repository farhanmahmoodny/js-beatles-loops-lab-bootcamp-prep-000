// add solution here
var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']
function theBeatlesPlay(musicians, instruments){
  var array = []
  for(var i = 0; i < 4; i++){
    array.push(musicians[i] +' plays '+ instruments[i])
  }
return array
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]
function johnLennonFacts(facts){
  var array = []
  while (facts.length){
  array.unshift((facts[facts.length-1] + '!!!'))
  --facts.length
}
  return array
}


function iLoveTheBeatles(number){
  var array = []
  do{
  array += 'I love the Beatles!'
  }
  while (
    if(number > 15){
      return array
    }else{
      (array.length = 15 - number)
    }
  return array
}
