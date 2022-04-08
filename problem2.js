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
    labels[i].style = "color:#ffffff";
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
    labels2[i].style = "color:#ffffff";
    }

  for(let i = 0; i < inputs2.length; i++) {
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

  let question3 = document.getElementById("question3");
  let inputs3 = question3.getElementsByTagName("input");
  let labels3 = question3.getElementsByTagName("label");

  for(let i = 0; i < inputs3.length; i++) {
    labels3[i].style = "color:#ffffff";
    }

  for(let i = 0; i < inputs3.length; i++) {
    if(inputs3[i].checked) {
      if(inputs3[i].value == question3Answer) {
        labels3[i].style = "color:green";
        right++;
        scores.innerHTML = right;
      }
      else {
        labels3[i].style = "color:red";
      }
    }
  }

  let question4 = document.getElementById("question4");
  let inputs4 = question4.getElementsByTagName("input");
  let labels4 = question4.getElementsByTagName("label");

  for(let i = 0; i < inputs4.length; i++) {
    labels4[i].style = "color:#ffffff";
    }

  for(let i = 0; i < inputs4.length; i++) {
    if(inputs4[i].checked) {
      if(inputs4[i].value == question4Answer) {
        labels4[i].style = "color:green";
        right++;
        scores.innerHTML = right;
      }
      else {
        labels4[i].style = "color:red";
      }
    }
  }

  let question5 = document.getElementById("question5");
  let inputs5 = question5.getElementsByTagName("input");
  let labels5 = question5.getElementsByTagName("label");

  for(let i = 0; i < inputs5.length; i++) {
    labels5[i].style = "color:#ffffff";
    }

  for(let i = 0; i < inputs5.length; i++) {
    if(inputs5[i].checked) {
      if(inputs5[i].value == question5Answer) {
        labels5[i].style = "color:green";
        right++;
        scores.innerHTML = right;
      }
      else {
        labels5[i].style = "color:red";
      }
    }
  }

  let question6 = document.getElementById("question6");
  let inputs6 = question6.getElementsByTagName("input");
  let labels6 = question6.getElementsByTagName("label");


  if(inputs6[0].value == question6Answer) {
    right++;
    scores.innerHTML = right;
  }
/*
  for(let i = 0; i < inputs6.length; i++) {
    if(inputs6[i].checked) {
      if(inputs6[i].value == question6Answer) {
        labels6[i].style = "color:green";
        right++;
        scores.innerHTML = right;
      }
    }
  } */

}
