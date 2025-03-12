var headingTwo = (document.getElementById("title").textContent =
    "Updated Heading");
var pOne = document.querySelector("div.content p");
pOne.style.color = "blue";
var listItemsOne = document.getElementsByClassName("list-item")[0];
listItemsOne.textContent = "Banana";
var listItemsTwo = document.getElementsByClassName("list-item")[1];
listItemsTwo.textContent = "Apple";
var listItemsThree = document.getElementsByClassName("list-item")[2];
listItemsThree.textContent = "Orange";
var button = document.createElement("button");
button.textContent = "More about fruits";
button.style.border = "1px solid red";
