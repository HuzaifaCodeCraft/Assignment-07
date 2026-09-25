
// 1 & 2. Change h1 text
var heading = document.getElementById("heading1");

heading.textContent = "My Student Profile";


// 3. Change student's name color to blue
var studentName = document.getElementsByClassName("name");

studentName[0].style.color = "blue";


// 4. Change both message paragraphs to green
var messages = document.querySelectorAll(".message");

for (var i = 0; i < messages.length; i++) {
    messages[i].style.color = "green";
}


// 5. Change body background color to lightgray
document.body.style.backgroundColor = "lightgray";


// 6. Button click changes background to lightblue
var button = document.getElementById("colorButton");

button.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});


// 7. Get link href and print it
var link = document.getElementById("googleLink");

var linkAddress = link.getAttribute("href");

console.log(linkAddress);


// 8. Open link in new tab
link.setAttribute("target", "_blank");


// 9. Add active class to box
var box = document.getElementById("box");

box.classList.add("active");


// 10. Check if box has active class
var hasActiveClass = box.classList.contains("active");

console.log(hasActiveClass);


// 11. Print box's parent
var boxParent = box.parentElement;

console.log(boxParent);

