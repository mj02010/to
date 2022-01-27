let todoVal = document.getElementById("inputBar");

function todoCreate() {
  let e = document.createElement("div");
  e.setAttribute("class", "todo");
  e.innerHTML =
    todoVal.value +
    `<span class="delete" onclick="this.parentElement.style.display = 'none';"><ion-icon name="trash-outline"></ion-icon></span>`;
  console.log(e);

  if (todoVal.value == "" || todoVal.value == " ") {
    return;
  } else {
    let todoArea = document.getElementById("eee");
    todoArea.appendChild(e);
    todoVal.value = "";
  }
}

const mainBtn = document.querySelectorAll("#main-btn")[0];

function disable() {
  if (!todoVal.value == "" || todoVal.value == " " || todoVal.value == "  ") {
    mainBtn.classList.remove("disabled");
  } else{
    mainBtn.classList.add('disabled');
  }
}
