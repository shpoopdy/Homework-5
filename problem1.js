function wordThing() {
  let isFive = false;
  let noNumber = true;
  let givenWord = "";
  let goodWord = false;

  while(!goodWord) {
    givenWord = window.prompt("Enter a five letter word: ");
    hasNumber = /\d/;
    if(hasNumber.test(givenWord)) {
      noNumber = false;
    }

    if(givenWord.length == 5) {
      isFive = true;
    }

    if(isFive && noNumber) {
      goodWord = true;
    }
  }
  let answer = []
  for(let i = 0; i < 3; i++) {
    for(let j = i + 1; j < 4; j++) {
      for(let k = j + 1; k < 5; k++) {
        answer = [givenWord.charAt(i), givenWord.charAt(j), givenWord.charAt(k)];
        document.write("<p>");
        document.write(answer[0]+answer[1]+answer[2]);
        document.write(" ");
        document.write(answer[0]+answer[2]+answer[1]);
        document.write(" ");
        document.write(answer[1]+answer[2]+answer[0]);
        document.write(" ");
        document.write(answer[1]+answer[0]+answer[2]);
        document.write(" ");
        document.write(answer[2]+answer[1]+answer[0]);
        document.write(" ");
        document.write(answer[2]+answer[0]+answer[1]);
        document.write("</p>");
      }
    }
  }

return answer;

}



window.addEventListener("load", wordThing, false);


//Gets all combinations. I should make a check to make sure that the returned
//words are of length 3.
