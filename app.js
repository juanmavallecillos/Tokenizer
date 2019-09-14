function Tokenizer(){
  this.dictionary = [];
  this.run = function (llista) {
    llista.forEach((k)=>{
      if(this.dictionary[k] == undefined){
        if(typeof defaultFunc != 'undefined'){
          defaultFunc();
        }
      }
      else{
        this.dictionary[k]();
      }
    })
  }
  this.on = function (char, funcio) {
      this.dictionary[char] = funcio;
  }
  this.onDefault = function (funcio){
    defaultFunc = funcio;
  }
}


function testTokenizer(){

var t = new Tokenizer();
var countA = 0;
var countC = 0;
var countX = 0;
var testString = ['H','o','l','a',' ','c','o','m',' ','a','n','e','u','?'];


t.on('a', function(){
  countA++;
});

t.on('c', function(){
  countC++;
});

t.onDefault(function(){
  countX++;
});

//here goes the code to run the test over testString
t.run(testString);

console.log("numero de a's: " + countA);
console.log("numero de c's: " + countC);
console.log("numero d'altres caracters: " + countX);
}

testTokenizer();