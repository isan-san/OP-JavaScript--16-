const paragraphs = document.querySelectorAll("*.paragraph");
const dropers = document.querySelectorAll("* .droper");
const trash_can = document.querySelector("* .trash-can");
paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("dragstart", (event) => {
    // console.log("inicio de arrastre");
    paragraph.classList.add("dragging");
    event.dataTransfer.setData("id", paragraph.id);
  });
  paragraph.addEventListener("dragend", () => {
    // console.log("he terminado de arrastrar el parrago: " + paragraph.innerHTML);
    paragraph.classList.remove("dragging");
  });
});
dropers.forEach((section) => {
  section.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  section.addEventListener("drop", (event) => {
    console.log("drop");
    const paragraphId = event.dataTransfer.getData("id");
    const paragraph = document.getElementById(paragraphId);
    section.appendChild(paragraph);
  });
});
trash_can.addEventListener("dragover", (event) => {
  event.preventDefault();
});
trash_can.addEventListener("drop", (event) => {
  console.log("drop");
  const paragraphId = event.dataTransfer.getData("id");
  const paragraph = document.getElementById(paragraphId);
  paragraph.parentNode.removeChild(paragraph);
  console.log("tryng to delte: " + paragraph.innerText);
});
