document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (e) {
        const target = e.target;
        if (target.classList.contains("complete")) {
            target.parentElement.querySelector("span").classList.toggle("completed");
        } else if (target.classList.contains("delete")) {
            target.parentElement.remove();
        }
    });
});
