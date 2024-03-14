function response() {
    var list = [
"You will be a billionaire!",
"Watch for your health, more vitamins!",
      "Yes",
"Love of your life is on the way!",
      "No",
      "Maybe",
"You'll go to the Mars!",
"Nothing special...",
    ];
    var number = Math.floor(Math.random()*8);
    document.getElementById("response").innerHTML = list[number];
}
