const tasks = {
  "2026-10-06": [
    { id: 1, subject: "Economics", task: "Practice questions from National Income", done: false },
    { id: 2, subject: "Economics", task: "Practice M&B and AD-AS numericals", done: false },
    { id: 3, subject: "BST", task: "Revise Chapters 1–5", done: false },
    { id: 4, subject: "Accountancy", task: "Revise Issue of Shares concepts", done: false },
    { id: 5, subject: "IP", task: "Start SQL fundamentals", done: false }
  ]
};

const quotes = [
  "Your future is being decided by what you execute today.",
  "Discipline is doing the work when motivation has disappeared.",
  "31 days. No excuses. No negotiation.",
  "You do not need a perfect day. You need an executed day.",
  "Every unfinished task is a vote for the future you say you don't want.",
  "Stop planning the life you want. Execute it.",
  "The gap between you and your goal is today's work.",
  "You said you wanted the result. Now earn it.",
  "Small excuses compound into big regrets.",
  "Do the work. Let the result speak."
];

const main = document.getElementById("main");
const navButtons = document.querySelectorAll(".nav-btn");

function getToday() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function getTasks() {
  const saved = localStorage.getItem("project31_tasks");
  return saved ? JSON.parse(saved) : tasks;
}

function saveTasks(data) {
  localStorage.setItem("project31_tasks", JSON.stringify(data));
}

function getQuote() {
  const today = getToday();
  const savedDate = localStorage.getItem("project31_quote_date");
  let index = Number(localStorage.getItem("project31_quote_index") || 0);

  if (savedDate !== today) {
    index = (index + 1) % quotes.length;
    localStorage.setItem("project31_quote_date", today);
    localStorage.setItem("project31_quote_index", index);
  }

  return quotes[index];
}

function calculateScore() {
  const data = getTasks();
  let completed = 0;
  let total = 0;

  Object.values(data).forEach(day => {
    day.forEach(task => {
      total++;
      if (task.done) completed++;
    });
  });

  return { completed, total };
}

function renderToday() {
  const today = getToday();
  const data = getTasks();
  const todayTasks = data[today] || [];

  const completed = todayTasks.filter(t => t.done).length;
  const total = todayTasks.length;

  main.innerHTML = `
    <section class="page">
      <div class="mission-card">
        <div class="eyebrow">TODAY'S MISSION</div>
        <h2>${today}</h2>
        <div class="progress">
          <div class="progress-fill" style="width:${total ? completed / total * 100 : 0}%"></div>
        </div>
        <p>${completed}/${total} tasks completed</p>
      </div>

      <div class="quote-card">
        <div class="eyebrow">DAILY QUOTE</div>
        <p>"${getQuote()}"</p>
      </div>

      <div class="tasks">
        ${todayTasks.length ? todayTasks.map(task => `
          <label class="task ${task.done ? "completed" : ""}">
            <input type="checkbox"
              data-task="${task.id}"
              ${task.done ? "checked" : ""}>
            <div>
              <strong>${task.subject}</strong>
              <span>${task.task}</span>
            </div>
          </label>
        `).join("") : `
          <div class="empty">No tasks scheduled for today.</div>
        `}
      </div>
    </section>
  `;

  document.querySelectorAll("[data-task]").forEach(box => {
    box.addEventListener("change", e => {
      const id = Number(e.target.dataset.task);
      const data = getTasks();

      if (data[today]) {
        const task = data[today].find(t => t.id === id);
        if (task) task.done = e.target.checked;
      }

      saveTasks(data);
      renderToday();
    });
  });
}

function renderPlan() {
  const data = getTasks();

  main.innerHTML = `
    <section class="page">
      <div class="section-title">
        <div class="eyebrow">OCTOBER</div>
        <h2>MISSION PLAN</h2>
      </div>

      ${Object.entries(data).map(([date, dayTasks]) => `
        <div class="day-card">
          <h3>${date}</h3>
          ${dayTasks.map(task => `
            <div class="plan-task ${task.done ? "completed" : ""}">
              <span>${task.done ? "✓" : "○"}</span>
              <div>
                <strong>${task.subject}</strong>
                <small>${task.task}</small>
              </div>
            </div>
          `).join("")}
        </div>
      `).join("")}
    </section>
  `;
}

function renderScore() {
  const score = calculateScore();
  const percentage = score.total
    ? Math.round(score.completed / score.total * 100)
    : 0;

  main.innerHTML = `
    <section class="page">
      <div class="section-title">
        <div class="eyebrow">PERFORMANCE</div>
        <h2>SCOREBOARD</h2>
      </div>

      <div class="score-card">
        <div class="score-number">${percentage}%</div>
        <p>EXECUTION RATE</p>
      </div>

      <div class="stats">
        <div>
          <strong>${score.completed}</strong>
          <span>COMPLETED</span>
        </div>
        <div>
          <strong>${score.total - score.completed}</strong>
          <span>REMAINING</span>
        </div>
        <div>
          <strong>${score.total}</strong>
          <span>TOTAL</span>
        </div>
      </div>

      <div class="warning">
        <strong>PROJECT 31 RULE</strong>
        <p>Points are earned through execution, not intention.</p>
      </div>
    </section>
  `;
}

function renderSyllabus() {
  main.innerHTML = `
    <section class="page">
      <div class="section-title">
        <div class="eyebrow">CLASS XII • CBSE</div>
        <h2>SYLLABUS</h2>
      </div>

      <div class="subject">
        <h3>ACCOUNTANCY</h3>
        <p>Partnership • Company Accounts • Financial Statements</p>
      </div>

      <div class="subject">
        <h3>ECONOMICS</h3>
        <p>Macroeconomics • Indian Economic Development</p>
      </div>

      <div class="subject">
        <h3>BUSINESS STUDIES</h3>
        <p>Principles & Functions of Management • Business Finance • Marketing</p>
      </div>

      <div class="subject">
        <h3>INFORMATICS PRACTICES</h3>
        <p>Python • Pandas • Matplotlib • SQL • Data Handling</p>
      </div>
   
