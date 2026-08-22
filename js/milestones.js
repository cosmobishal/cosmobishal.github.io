(() => {
  const data = window.PORTFOLIO;
  const target = document.getElementById("milestoneLong");
  if (!data || !target) return;

  target.innerHTML = data.milestones.map((item, i) => `
    <article class="milestone-long-item reveal is-visible">
      <div class="milestone-year">${item.year}</div>
      <div class="milestone-node">${String(i + 1).padStart(2, "0")}</div>
      <div class="milestone-long-copy">
        <h2>${item.title}</h2>
        <p>${item.text}</p>
      </div>
    </article>
  `).join("");
})();
