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
}

window.addEventListener("load", wordThing, false);

/*
Gets all combinations. I should make a check to make sure that the returned
words are of length 3.

var tree = function(leafs) {
  var branches = [];
  if (leafs.length == 1) return leafs;
  for (var k in leafs) {
    var leaf = leafs[k];
    tree(leafs.join('').replace(leaf, '').split('')).concat("").map(function(subtree) {
      branches.push([leaf].concat(subtree));
    });
  }
  return branches;
};
console.log(tree("abc".split('')).map(function(str) {
  return str.join('')
}))
*/
