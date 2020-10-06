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
      if(opened.includes(char) === closed.includes(char)){
       
        if(char !== ' ' & !checkBrackets.includes(char)){
          checkBrackets.push(char);
        } else if(checkBrackets.length === 0 || closed.indexOf(char) > -1){
          bracketSimple = opened[closed.indexOf(char)];
          if(bracketSimple !== checkBrackets.pop()){
            return false; 
          }
        }
      }
      else{
        if(char !== ' ' && opened.indexOf(char) > -1){
          checkBrackets.push(char); 
        
          
        }
        else if(checkBrackets.length === 0 || closed.indexOf(char) > -1){
          bracketSimple = opened[closed.indexOf(char)];
          if(bracketSimple !== checkBrackets.pop()){
            return false; 
          }
        }
      }  
    
    }
     
    return (checkBrackets.length === 0);
}

