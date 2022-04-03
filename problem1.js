function wordThing() {
  let isFive = false;
  let hasNumber = false;

  while(!isFive || !hasNumber) {
    let givenWord = window.prompt("Enter a five letter word: ");
    for(let i = 0; i < givenWord.length; i++) {
      if(givenWord[i].isNaN()) {
        hasNumber = true;
        break;
      }
    }

    if(givenWord.length < 5 || givenWord.length > 5) {
      window.prompt("Five letter words only!");
      break;
    }
    else {
      isFive = true;
    }
}
