// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"
var btnElBorder = document.getElementById("add-border-btn");
var contentSection = document.querySelector(".content");
btnElBorder.addEventListener("click", function () {
    contentSection.style.border = "2px solid red";
});
// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"
var btnElChange = document.getElementById("change-text-btn");
btnElChange.addEventListener("click", function () {
    contentSection.style.color = "blue";
});
// Add event listener when button with id "change-text-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"
btnElChange.addEventListener("click", function () {
    contentSection.style.backgroundColor = "gray";
});
//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  12px 12px 2px 1px rgba(0, 0, 255, 0.2);
if (contentSection) {
    contentSection.addEventListener("mouseover", function () {
        contentSection.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
    });
    contentSection.addEventListener("mouseout", function () {
        contentSection.style.boxShadow = "none";
    });
}
//Допълнителни задачи
//Промяна на текста на h3 при двоен клик върху него
var heading = document.querySelector(".content h3");
if (heading) {
    heading.addEventListener("dblclick", function () {
        heading.textContent = "New Heading Text";
    });
}
//Добавяне на alert съобщение при натискане на бутон от клавиатурата, докато съм отворила сайта
// document.addEventListener("keydown", () => {
//   alert("You pressed a key!");
// });
//Когато бутонът с ID add-border-btn бъде двойно натиснат, скрий секцията с клас content.
btnElBorder.addEventListener("dblclick", function () {
    contentSection.style.display = "none";
});
//Ако секцията content е скрита, при натискане на бутона с ID change-text-btn я покажи отново.
if (btnElChange) {
    btnElChange.addEventListener("dblclick", function () {
        if (contentSection.style.display === "none") {
            contentSection.style.display = "block";
        }
    });
}
//Когато потребителят кликне върху елемента <h1>, промени цвета му на зелен и добави подчертаване.
var hOneEl = document.getElementsByTagName("h1")[0];
hOneEl.addEventListener("click", function () {
    hOneEl.style.color = "green";
    hOneEl.style.textDecorationLine = "underline";
});
//При клик върху параграфа (<p>) в секцията content, покажи alert със съдържанието на текста.
var prg = document.getElementsByTagName("p")[0];
prg.addEventListener("click", function () {
    alert("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s.");
});
// Когато бутонът с ID toggle-bg-btn бъде натиснат, създай и добави нов параграф в секцията content с произволен текст.
var btnToggle = document.getElementById("toggle-bg-btn");
btnToggle.addEventListener("click", function () {
    var newParagraph = document.createElement("p");
    newParagraph.textContent = "Added text in the new paragraph";
    contentSection.append(newParagraph);
});
// И Когато потребителят натисне клавиша Backspace, премахни последния параграф от секцията content.
if (contentSection) {
    document.addEventListener("keydown", function (event) {
        if (event.key === "Backspace") {
            //намирам последния добавен параграф в секццията
            var paragraphs = contentSection.querySelectorAll("p");
            var lastParapraph = paragraphs[paragraphs.length - 1];
            if (lastParapraph) {
                //премахване на последния параграф в секцията
                contentSection.removeChild(lastParapraph);
            }
        }
    });
}
//Когато потребителят задържи клавиша Shift, фоновият цвят на секцията content да стане жълт. При отпускане – да се върне към оригиналния цвят.
//Запазвам оригиналния фонов цвят в променлива, за да я използвам после за възстановяване на оригиналния цвят
var originalBgColor = contentSection
    ? contentSection.style.backgroundColor
    : "";
if (contentSection) {
    document.addEventListener("keydown", function (event) {
        if (event.key === "Shift") {
            contentSection.style.backgroundColor = "yellow";
        }
    });
    document.addEventListener("keyup", function (event) {
        if (event.key === "Shift") {
            contentSection.style.backgroundColor = originalBgColor || "";
        }
    });
}
//Когато потребителят кликне върху бутона с ID add-border-btn, в конзолата да се изпише текущият час.
btnElBorder.addEventListener("click", function () {
    console.log(Date().toString());
});
//При всяко кликване върху бутона с ID change-text-btn, увеличавай размера на шрифта в секцията content с 2px.
//Създавам променлива с първоначална стойност на шрифта, после добавям евен лисънър за всеки клик на бутона
var currentFontSize = 16;
btnElChange.addEventListener("click", function () {
    currentFontSize += 2;
    contentSection.style.fontSize = "".concat(currentFontSize, "px");
});
//Позволи на бутона с ID toggle-bg-btn да реагира само на първите три клика, след което да стане неактивен.
//При натискане на бутона с ID add-border-btn, създай и добави списък с три елемента в секцията content.
btnElBorder.addEventListener("click", function () {
    var ulElement = document.createElement("ul");
    var li1 = document.createElement("li");
    li1.textContent = "List item 1";
    var li2 = document.createElement("li");
    li2.textContent = "List item 2";
    var li3 = document.createElement("li");
    li3.textContent = "List item 3";
    ulElement.append(li1, li2, li3);
    contentSection.append(ulElement);
});
