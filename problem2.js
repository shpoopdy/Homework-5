function startQuiz() {
  let question1Answer = "Lumberjack";
  let question2Answer = "programming";
  let question3Answer = "int";
  let question4Answer = "False";
  let question5Answer = "True";
  let question6Answer = "Personal";

  let question1 = document.getElementById("question1");
  let inputs = question1.getElementsByTagName("input");
  let labels = question1.getElementsByTagName("label");
  let right = 0;
  let scores = document.getElementById("score");
  scores.innerHTML = right;

  for(let i = 0; i < inputs.length; i++) {
    labels[i].style = "color:black";
    }



  for(let i = 0; i < inputs.length; i++) {
    if(inputs[i].checked) {
      if(inputs[i].value == question1Answer) {
        labels[i].style = "color:green";
        right++;
        scores.innerHTML = right;
      }
      else {
        labels[i].style = "color:red";
      }
    }
  }

  let question2 = document.getElementById("question2");
  let inputs2 = question2.getElementsByTagName("input");
  let labels2 = question2.getElementsByTagName("label");

  for(let i = 0; i < inputs2.length; i++) {
    labels2[i].style = "color:black";
    }

  for(let i = 0; i < inputs.length; i++) {
    if(inputs2[i].checked) {
      if(inputs2[i].value == question2Answer) {
        labels2[i].style = "color:green";
        right++;
        scores.innerHTML = right;
      }
      else {
        labels2[i].style = "color:red";
      }
    }
  }

}
