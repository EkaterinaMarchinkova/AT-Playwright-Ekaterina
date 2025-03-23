const headingTwo = (document.getElementById("title")!.textContent =
  "Fruit shop");
// if (headingTwo) {
//     headingTwo.textContent = "Fruit shop";
//   }

const paragraphOne = document.querySelector(
  "div.content p"
) as HTMLParagraphElement;
paragraphOne.style.color = "blue";

const listItemsOne: Element = document.getElementsByClassName("list-item")[0];
listItemsOne.textContent = "Banana";

const listItemsTwo: Element = document.getElementsByClassName("list-item")[1];
listItemsTwo.textContent = "Apple";

const listItemsThree: Element = document.getElementsByClassName("list-item")[2];
listItemsThree.textContent = "Orange";

const button = document.createElement("button");
button.textContent = "More about fruits";
button.style.border = "1px solid red";
