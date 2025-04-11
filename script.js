function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
  
    if (task === "") return;
  
    const li = document.createElement("li");
    li.textContent = task;
  
    // Toggle completed
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  
    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";
    delBtn.onclick = function () {
      li.remove();
    };
  
    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  