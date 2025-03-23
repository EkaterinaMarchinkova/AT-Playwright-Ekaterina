//get element by tag name
document.getElementsByTagName("h1")[0];

//get h1 tag by css selector
document.querySelector("h1");

//create DOM element
const paragraph: HTMLParagraphElement = document.createElement("p");
paragraph.textContent = "This is our created paragraph";

//get element by class name
const addItemsContent: HTMLCollectionOf<Element> =
  document.getElementsByClassName("add-items");
console.log("addItemsContent");

//append element in the html structure - достъпваме 0-левия елемент от колекцията
addItemsContent[0].append(paragraph);

//remove elements
const spanElement: HTMLSpanElement = document.getElementsByTagName("span")[0];
spanElement.remove();

//event listener on keyboard press
document.addEventListener("keypress", (event: KeyboardEvent) => {
  console.log("Key press", event.key);
});

//Ще добавим списък в който ще се популират данните въведени в инпута
//Add and remove list items
// Първо локираме елементите с които ще работим
const itemInput = document.querySelector("#itemInput") as HTMLInputElement;
const addButton = document.querySelector("#addButton") as HTMLButtonElement;
const list = document.querySelector("#list") as HTMLUListElement;

function addListItem() {
  //После добавяме евен лисънър за засичане на евента който искаме в случая кликването върху бутона add

  const listItem: HTMLLIElement = document.createElement("li");
  const listItemValue: string | number = itemInput.value;
  paragraph.remove();

  // добавяме проверка ако инпута е празен стринг да не добавя празни стойности
  if (listItemValue !== "" && listItemValue !== " ") {
    // added input value as list item text
    listItem.textContent = listItemValue;
    //display list item on the screen
    list.append(listItem);

    // clear input value after adding it to the list
    itemInput.value = "";
    //този метод оставя фокуса на мишката върху инпута след натискане на ботуна add
    itemInput.focus();

    //добавяме delete бутон на всеки добавен айтем
    const deleteBtn: HTMLButtonElement = document.createElement("button");

    deleteBtn.textContent = "Delete";
    listItem.append(deleteBtn);

    deleteBtn.style.margin = "5px";

    //добавяме функционалност на бутона, при натискане на delete да изтрива елемента от списъка
    deleteBtn.addEventListener("click", () => {
      listItem.remove();
    });
  }
}
addButton.addEventListener("click", () => addListItem());
itemInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addListItem();
  }
});
