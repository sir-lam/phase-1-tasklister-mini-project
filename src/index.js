document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const input = document.querySelector("#new-task-description");
  const prioritySelect = document.querySelector("#priority");
  const taskList = document.querySelector("#tasks");

  const priorityColors = {
    high: "red",
    medium: "orange",
    low: "green",
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (text === "") return;

    const priority = prioritySelect.value;

    const li = document.createElement("li");
    li.textContent = text;
    li.style.color = priorityColors[priority]

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", () => li.remove());

    li.append(" ",deleteBtn);
    taskList.appendChild(li);
    form.reset();
  });
});
