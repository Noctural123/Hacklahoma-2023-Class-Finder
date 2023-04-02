var byline = document.getElementById("byline");
bylineText = byline.innerHTML;
let bylineArr = bylineText.split("");
byline.innerHTML = "";
var span;
var letter;

for (int = 0; i < bylineArr.length; i++) {
    span = document.createElement("span");
    letter = document.createTextNode(bylineArr[i]);
    if (bylineArr[i] == " ") {
        byline.appendChild(letter);
    } else {
        span.appendChild(letter);
        byline.appendChild(span);
    }
}