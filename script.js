const addTask = document.getElementById("Task");
const btn = document.getElementById("addBtn");
const ul = document.getElementById("list");

btn.addEventListener("click", () => {
  let newTask = addTask.value.trim();
  if (!newTask) return;

  // li
  let li = document.createElement("li");

  // task-content div (checkbox + text)
  let taskContent = document.createElement("div");
  taskContent.className = "task-content";

  // checkBox
  let checkBox = document.createElement("button");
  checkBox.className = "check";
  checkBox.innerHTML = `<i class="fa-regular fa-square"></i>`;

  let taskText = document.createElement("span");
  taskText.textContent = newTask;

  // append checkbox + text inside taskContent
  taskContent.appendChild(checkBox);
  taskContent.appendChild(taskText);

  // delete btn
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  deleteBtn.className = "delete";

  // delete functionality
  deleteBtn.addEventListener("click", () => {
    li.classList.add("remove");
    setTimeout(() => {
      li.remove();
    }, 300);
  });

  li.appendChild(taskContent);
  li.appendChild(deleteBtn);
  ul.appendChild(li);

  // input clear
  addTask.value = "";
  addTask.focus();

  // checkbox toggle
  checkBox.addEventListener("click", () => {
    if (checkBox.innerHTML === `<i class="fa-regular fa-square"></i>`) {
      checkBox.innerHTML = `<i class="fa-solid fa-check-square"></i>`;
    } else {
      checkBox.innerHTML = `<i class="fa-regular fa-square"></i>`;
    }
  });
});
