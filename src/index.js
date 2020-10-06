module.exports = function check(str, arr) {
    let closed = [];
    let opened = [];
    let checkBrackets = [];
    let char;
    let closedBracket;
    
  
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < 1; j++){
        opened.push(arr[i][0].trim());
        closed.push(arr[i][1].trim());
      }
    }
    
    
    for(let i = 0; i < str.length; i++){
      char = str[i];
  
      if(char !== ' ' && opened.indexOf(char) > -1){
        checkBrackets.push(char);   
      }
      else if(closed.indexOf(char) > -1){
        bracketSimple = opened[closed.indexOf(char)];
        if(bracketSimple !== checkBrackets.pop()){
          return false; 
        }
      } 
    
    }
     
    return (checkBrackets.length === 0);
}

