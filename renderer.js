console.log("renderer loaded");

// Window buttons (welcome + todo)
["minBtn1","minBtn2"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("click", () => window.electronAPI.minimize());
});

["closeBtn1","closeBtn2"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("click", () => window.electronAPI.close());
});

// Screens
const welcomeScreen = document.getElementById("welcomeScreen");
const todoScreen = document.getElementById("todoScreen");
const continueBtn = document.getElementById("continueBtn");



continueBtn.addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");
  todoScreen.classList.remove("hidden");


  if (!mascotStarted) {
    mascotStarted = true;
    
  }
});

// --- TODO LOGIC ---
const STORAGE_KEY = "pixelChecklist.tasks";

const filterInput = document.getElementById("filterInput");
const taskList = document.getElementById("taskList");
const newInput = document.getElementById("newInput");
const addBtn = document.getElementById("addBtn");

let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

function save(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function render(){
  const q = (filterInput.value || "").trim().toLowerCase();
  taskList.innerHTML = "";

  tasks
    .filter(t => !q || t.text.toLowerCase().includes(q))
    .forEach((t, idx) => {
      const li = document.createElement("li");
      li.className = "task" + (t.done ? " done" : "");

      const cb = document.createElement("button");
      cb.className = "checkbox" + (t.done ? " checked" : "");
      cb.addEventListener("click", () => {
        tasks[idx].done = !tasks[idx].done;
        save(); render();
      });

      const text = document.createElement("div");
      text.className = "task-text";
      text.textContent = t.text;

      const del = document.createElement("button");
      del.className = "del-btn";
      del.textContent = "–";
      del.addEventListener("click", () => {
        tasks.splice(idx, 1);
        save(); render();
      });

      li.appendChild(cb);
      li.appendChild(text);
      li.appendChild(del);

      taskList.appendChild(li);
    });
}

function addTask(){
  const v = newInput.value.trim();
  if (!v) return;
  tasks.unshift({ text: v, done: false });
  newInput.value = "";
  save(); render();
}

addBtn.addEventListener("click", addTask);
newInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});
filterInput.addEventListener("input", render);

render();



