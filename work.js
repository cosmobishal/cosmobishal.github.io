(() => {
  const data = window.PORTFOLIO;
  const target = document.getElementById("fullTimeline");
  if (!data || !target) return;

  target.innerHTML = data.experience.map(item => `
    <article class="timeline-item reveal is-visible">
      <div class="timeline-dot"></div>
      <div class="timeline-date">${item.period}</div>
      <div class="timeline-body">
        <h3>${item.title}</h3>
        <p class="timeline-org">${item.organization} · ${item.place}</p>
        <p>${item.summary}</p>
      </div>
    </article>
  `).join("");
})();
