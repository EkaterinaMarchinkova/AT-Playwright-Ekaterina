// Add event listener when button with id "add-border-btn" is clicked
// and add border style "2px solid red" for section with class name "content"

const btnElBorder: HTMLButtonElement = document.getElementById(
  "add-border-btn"
) as HTMLButtonElement;
const contentSection = document.querySelector(".content") as HTMLElement;

btnElBorder.addEventListener("click", () => {
  contentSection.style.border = "2px solid red";
});

// Add event listener when button with id "change-text-btn" is clicked
// and add color style "blue" for section with class name "content"

const btnElChange: HTMLButtonElement = document.getElementById(
  "change-text-btn"
) as HTMLButtonElement;

btnElChange.addEventListener("click", () => {
  contentSection.style.color = "blue";
});

// Add event listener when button with id "change-text-btn" is clicked
// and add backgroundColor style "gray" for section with class name "content"

btnElChange.addEventListener("click", () => {
  contentSection.style.backgroundColor = "gray";
});

//Add event listener when section element with class name "content" is hovered
// this means to use mouseover event type
// and add box-shadow style  12px 12px 2px 1px rgba(0, 0, 255, 0.2);

if (contentSection) {
  contentSection.addEventListener("mouseover", () => {
    contentSection.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, 0.2)";
  });
  contentSection.addEventListener("mouseout", () => {
    contentSection.style.boxShadow = "none";
  });
}

//Допълнителни задачи
//1. Промяна на текста на h3 при двоен клик върху него
const heading = document.querySelector<HTMLElement>(".content h3");

if (heading) {
  heading.addEventListener("dblclick", () => {
    heading.textContent = "New Heading Text";
  });
}
//2.Добавяне на alert съобщение при натискане на бутон от клавиатурата, докато съм отворила сайта
document.addEventListener("keydown", () => {
  alert("You pressed a key!");
});

//3. Когато бутонът с ID add-border-btn бъде двойно натиснат, скрий секцията с клас content.
btnElBorder.addEventListener("dblclick", () => {
  contentSection.style.display = "none";
});

//4. Ако секцията content е скрита, при натискане на бутона с ID change-text-btn я покажи отново.
if (btnElChange) {
  btnElChange.addEventListener("dblclick", () => {
    if (contentSection.style.display === "none") {
      contentSection.style.display = "block";
    }
  });
}

//5. Когато потребителят кликне върху елемента <h1>, промени цвета му на зелен и добави подчертаване.
const hOneEl: HTMLHeadingElement = document.getElementsByTagName("h1")[0];
hOneEl.addEventListener("click", () => {
  hOneEl.style.color = "green";
  hOneEl.style.textDecorationLine = "underline";
});

//6. При клик върху параграфа (<p>) в секцията content, покажи alert със съдържанието на текста.
const prg: HTMLParagraphElement = document.getElementsByTagName("p")[0];
prg.addEventListener("click", () => {
  alert(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s."
  );
});

//7. Когато бутонът с ID toggle-bg-btn бъде натиснат, създай и добави нов параграф в секцията content с произволен текст.
const btnToggle: HTMLButtonElement = document.getElementById(
  "toggle-bg-btn"
) as HTMLButtonElement;

btnToggle.addEventListener("click", () => {
  const newParagraph: HTMLParagraphElement = document.createElement("p");
  newParagraph.textContent = "Added text in the new paragraph";
  contentSection.append(newParagraph);
});

//8. И Когато потребителят натисне клавиша Backspace, премахни последния параграф от секцията content.
if (contentSection) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
      //намирам последния добавен параграф в секццията
      const paragraphs = contentSection.querySelectorAll("p");
      const lastParapraph = paragraphs[paragraphs.length - 1];
      if (lastParapraph) {
        //премахване на последния параграф в секцията
        contentSection.removeChild(lastParapraph);
      }
    }
  });
}

//9. Когато потребителят задържи клавиша Shift, фоновият цвят на секцията content да стане жълт. При отпускане – да се върне към оригиналния цвят.
//Запазвам оригиналния фонов цвят в променлива, за да я използвам после за възстановяване на оригиналния цвят
const originalBgColor = contentSection
  ? contentSection.style.backgroundColor
  : "";

if (contentSection) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Shift") {
      contentSection.style.backgroundColor = "yellow";
    }
  });
  document.addEventListener("keyup", (event) => {
    if (event.key === "Shift") {
      contentSection.style.backgroundColor = originalBgColor || "";
    }
  });
}

//10. Когато потребителят кликне върху бутона с ID add-border-btn, в конзолата да се изпише текущият час.
btnElBorder.addEventListener("click", () => {
  console.log(Date().toString());
});

//11. При всяко кликване върху бутона с ID change-text-btn, увеличавай размера на шрифта в секцията content с 2px.
//Създавам променлива с първоначална стойност на шрифта, после добавям евен лисънър за всеки клик на бутона
let currentFontSize = 16;
btnElChange.addEventListener("click", () => {
  currentFontSize += 2;
  contentSection.style.fontSize = `${currentFontSize}px`;
});

//12. Позволи на бутона с ID toggle-bg-btn да реагира само на първите три клика, след което да стане неактивен.

//13. При натискане на бутона с ID add-border-btn, създай и добави списък с три елемента в секцията content.
btnElBorder.addEventListener("click", () => {
  const ulElement = document.createElement("ul");

  const li1 = document.createElement("li");
  li1.textContent = "List item 1";

  const li2 = document.createElement("li");
  li2.textContent = "List item 2";

  const li3 = document.createElement("li");
  li3.textContent = "List item 3";

  ulElement.append(li1, li2, li3);
  contentSection.append(ulElement);
});

//14. Когато потребителят задържи мишката върху параграфа (<p>), курсорът да се промени на pointer.
if (prg) {
  prg.addEventListener("mouseover", (event) => {
    prg.style.cursor = "pointer";
  });

  prg.addEventListener("mouseout", () => {
    prg.style.cursor = "default";
  });
}

//15. Условие: При напускане на секцията content (събитие mouseleave), ако текстът вътре е по-кратък от 50 символа, покажи alert с предупреждение.
if (contentSection) {
  contentSection.addEventListener("mouseleave", () => {
    const textContent = contentSection.textContent?.trim() || "";
    if (textContent.length < 50) {
      alert("Warning: The content is too short!");
    }
  });
}
