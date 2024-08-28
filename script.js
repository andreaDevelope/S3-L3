const input = document.querySelector("input");
const submit = document.querySelector("button");
const main = document.querySelector("main");
let ul;
const createUl = (event) => {
  event.preventDefault();
  ul = document.querySelector("ul");
  if (!ul) {
    ul = document.createElement("ul");
    main.appendChild(ul);
  }
  createElements();
};

const createElements = (e) => {
  let task = input.value;
  const div = document.createElement("div");
  const li = document.createElement("li");
  const taskCompleteBtn = document.createElement("button");
  const removeTaskBtn = document.createElement("button");
  taskCompleteBtn.innerText = "task completata";
  removeTaskBtn.innerText = "rimuovi task";
  li.innerText = task;
  ul.appendChild(div);
  div.appendChild(li);
  div.appendChild(taskCompleteBtn);
  div.appendChild(removeTaskBtn);
  taskCompleteBtn.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
  });
  removeTaskBtn.addEventListener("click", () => {
    div.remove();
  });

  if (task === "" || task === " ") {
    div.remove();

    let existingError = document.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }

    const errorP = document.createElement("p");
    errorP.className = "error-message";
    errorP.innerText = "Task non valido";
    errorP.style.color = "red";

    main.appendChild(errorP);
  } else {
    let existingError = document.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }
  }
};

submit.addEventListener("click", createUl);
