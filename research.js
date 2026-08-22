(() => {
  const data = window.PORTFOLIO;
  const filters = document.getElementById("researchFilters");
  const list = document.getElementById("researchList");
  if (!data || !filters || !list) return;

  const types = ["All", ...new Set(data.research.map(x => x.type))];
  filters.innerHTML = types.map((type, i) => `<button class="filter-button ${i === 0 ? "active" : ""}" data-type="${type}">${type}</button>`).join("");

  const render = (type = "All") => {
    const items = type === "All" ? data.research : data.research.filter(item => item.type === type);
    list.innerHTML = items.map((item, i) => `
      <article class="research-row">
        <div class="research-row-number">${String(i + 1).padStart(2, "0")}</div>
        <div class="research-row-main">
          <span class="research-type">${item.type}</span>
          <h2>${item.title}</h2>
          <p>${item.summary}</p>
          <small>${item.methods}</small>
        </div>
        <a class="round-link" href="${item.link}" target="_blank" rel="noreferrer" aria-label="Open research record">↗</a>
      </article>
    `).join("");
  };

  filters.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-button");
    if (!button) return;
    filters.querySelectorAll(".filter-button").forEach(x => x.classList.remove("active"));
    button.classList.add("active");
    render(button.dataset.type);
  });

  render();
})();
