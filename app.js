const main = document.getElementById("main");
const navButtons = document.querySelectorAll(".nav-btn");

const pages = {
  today: `
    <section class="page">
      <div class="mission-card">
        <div class="eyebrow">TODAY'S MISSION</div>
        <h2>OCTOBER 6</h2>
        <div class="progress">
          <div class="progress-fill" style="width:0%"></div>
        </div>
        <p>0/5 tasks completed</p>
      </div>

      <div class="quote-card">
        <div class="eyebrow">DAILY QUOTE</div>
        <p>"Your future is being decided by what you execute today."</p>
      </div>

      <div class="tasks">

        <label class="task">
          <input type="checkbox">
          <div>
            <strong>ECONOMICS</strong>
            <span>Practice questions from National Income</span>
          </div>
        </label>

        <label class="task">
          <input type="checkbox">
          <div>
            <strong>ECONOMICS</strong>
            <span>Practice M&B and AD-AS numericals</span>
          </div>
        </label>

        <label class="task">
          <input type="checkbox">
          <div>
            <strong>BST</strong>
            <span>Revise Chapters 1–5</span>
          </div>
        </label>

        <label class="task">
          <input type="checkbox">
          <div>
            <strong>ACCOUNTANCY</strong>
            <span>Revise Issue of Shares concepts</span>
          </div>
        </label>

        <label class="task">
          <input type="checkbox">
          <div>
            <strong>IP</strong>
            <span>Start SQL fundamentals</span>
          </div>
        </label>

      </div>
    </section>
  `,

  plan: `
    <section class="page">
      <div class="section-title">
        <div class="eyebrow">OCTOBER MISSION</div>
        <h2>MISSION PLAN</h2>
      </div>

      <div class="day-card">
        <h3>OCTOBER 6</h3>
        <div class="plan-task">
          <span>○</span>
          <div>
            <strong>ECONOMICS</strong>
            <small>National Income practice</small>
          </div>
        </div>
        <div class="plan-task">
          <span>○</span>
          <div>
            <strong>ECONOMICS</strong>
            <small>M&B + AD-AS practice</small>
          </div>
        </div>
        <div class="plan-task">
          <span>○</span>
          <div>
            <strong>BST</strong>
            <small>Revise Chapters 1–5</small>
          </div>
        </div>
        <div class="plan-task">
          <span>○</span>
          <div>
            <strong>ACCOUNTANCY</strong>
            <small>Issue of Shares revision</small>
          </div>
        </div>
        <div class="plan-task">
          <span>○</span>
          <div>
            <strong>IP</strong>
            <small>Start SQL fundamentals</small>
          </div>
        </div>
      </div>
    </section>
  `,

  score: `
    <section class="page">
      <div class="section-title">
        <div class="eyebrow">PERFORMANCE</div>
        <h2>SCOREBOARD</h2>
      </div>

      <div class="score-card">
        <div class="score-number">0%</div>
        <p>EXECUTION RATE</p>
      </div>

      <div class="stats">
        <div>
          <strong>0</strong>
          <span>COMPLETED</span>
        </div>
        <div>
          <strong>5</strong>
          <span>REMAINING</span>
        </div>
        <div>
          <strong>5</strong>
          <span>TOTAL</span>
        </div>
      </div>

      <div class="warning">
        <strong>PROJECT 31 RULE</strong>
        <p>Points are earned through execution, not intention.</p>
      </div>
    </section>
  `,

  syllabus: `
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
    </section>
  `,

  settings: `
    <section class="page">
      <div class="section-title">
        <div class="eyebrow">CONTROL ROOM</div>
        <h2>SETTINGS</h2>
      </div>

      <div class="setting-card">
        <strong>PROJECT 31</strong>
        <span>31 DAYS. ZERO EXCUSES. EXECUTE.</span>
      </div>

      <button class="danger-btn" onclick="alert('Progress reset.')">
        RESET LOCAL PROGRESS
      </button>

      <p class="settings-note">
        Project 31 — v1.0.2
      </p>
    </section>
  `
};

function showPage(route) {
  if (!main) return;

  main.innerHTML = pages[route] || pages.today;

  navButtons.forEach(function(button) {
    button.classList.remove("active");

    if (button.dataset.route === route) {
      button.classList.add("active");
    }
  });
}

navButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    showPage(button.dataset.route);
  });
});

showPage("today");
