(() => {
  const body = document.body;

  const themeKey = "bn-theme";
  const savedTheme = localStorage.getItem(themeKey);
  if (savedTheme) body.dataset.theme = savedTheme;

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = body.dataset.theme === "light" ? "dark" : "light";
      body.dataset.theme = next;
      localStorage.setItem(themeKey, next);
    });
  }

  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 })
    : null;

  document.querySelectorAll(".reveal").forEach(el => {
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add("is-visible");
  });

  const cosmos = document.getElementById("cosmos");
  if (cosmos) initCosmos(cosmos);

  const data = window.PORTFOLIO;
  if (!data) return;

  const researchGrid = document.getElementById("researchGrid");
  if (researchGrid) {
    researchGrid.innerHTML = data.research.slice(0, 6).map((item, i) => `
      <article class="research-card reveal" style="--delay:${i * 60}ms">
        <div class="research-top"><span>${String(i + 1).padStart(2, "0")}</span><em>${item.type}</em></div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <small>${item.methods}</small>
        <a href="${item.link}" target="_blank" rel="noreferrer">Open record ↗</a>
      </article>
    `).join("");
    researchGrid.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
  }

  const timeline = document.getElementById("experienceTimeline");
  if (timeline) {
    timeline.innerHTML = data.experience.map((item, i) => `
      <article class="timeline-item reveal" style="--delay:${i * 70}ms">
        <div class="timeline-dot"></div>
        <div class="timeline-date">${item.period}</div>
        <div class="timeline-body">
          <h3>${item.title}</h3>
          <p class="timeline-org">${item.organization} · ${item.place}</p>
          <p>${item.summary}</p>
        </div>
      </article>
    `).join("");
    timeline.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
  }

  const milestoneCards = document.getElementById("milestoneCards");
  if (milestoneCards) {
    milestoneCards.innerHTML = data.milestones.slice(-3).map(item => `
      <article class="milestone-card reveal is-visible">
        <span>${item.year}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `).join("");
  }

  const writingGrid = document.getElementById("writingGrid");
  if (writingGrid) {
    writingGrid.innerHTML = data.writing.map((item, i) => `
      <article class="writing-card reveal is-visible">
        <div class="writing-index">0${i + 1}</div>
        <span>${item.label}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <a href="${item.href}">Read more →</a>
      </article>
    `).join("");
  }
})();

function initCosmos(canvas) {
  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let stars = [];
  const count = Math.min(160, Math.max(80, Math.floor(window.innerWidth / 9)));

  const resize = () => {
    width = canvas.width = window.innerWidth * devicePixelRatio;
    height = canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.2,
      a: Math.random() * 0.55 + 0.15,
      p: Math.random() * Math.PI * 2,
      s: Math.random() * 0.006 + 0.002
    }));
  };

  const draw = (t = 0) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (const star of stars) {
      const alpha = star.a + Math.sin(t * star.s + star.p) * 0.12;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180, 215, 255, ${Math.max(0.05, alpha)})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  };

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(draw);
}
