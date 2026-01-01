// careers-page.js
document.addEventListener("DOMContentLoaded", () => {
  const careerGrid = document.getElementById("careerGrid");
  const searchInput = document.getElementById("searchInput");
  const fieldFilter = document.getElementById("fieldFilter");
  const careers = window.careers || [];

  // Helper: create a single career card
  function createCard(career) {
    const card = document.createElement("div");
    card.className = "career-card";
    card.dataset.field = career.field || "";

    const title = document.createElement("h3");
    title.textContent = career.title;
    title.style.cursor = "pointer";

    const details = document.createElement("div");
    details.className = "career-details";
    details.style.display = "none";

    details.innerHTML = `
      <p><strong>Field:</strong> ${career.field}</p>
      <p><strong>Description:</strong> ${career.description}</p>
      <p><strong>Subjects:</strong> ${(career.subjects || []).join(", ")}</p>
      <p><strong>Skills:</strong> ${(career.skills || []).join(", ")}</p>
      <p><strong>Salary (ZAR):</strong> Entry: ${career.salary?.entry?.toLocaleString() || "N/A"}, Mid: ${career.salary?.mid?.toLocaleString() || "N/A"}, Senior: ${career.salary?.senior?.toLocaleString() || "N/A"}</p>
      <p><strong>Job Market SA:</strong> Demand: ${career.jobMarketSA?.demand || "N/A"}, Growth: ${career.jobMarketSA?.growth || "N/A"}, Popular Cities: ${(career.jobMarketSA?.popularCities || []).join(", ")}</p>
      <p><strong>Universities:</strong> ${(career.universities || []).join(", ")}</p>
    `;

    title.addEventListener("click", () => {
      details.style.display = details.style.display === "none" ? "block" : "none";
    });

    card.appendChild(title);
    card.appendChild(details);
    return card;
  }

  // Render a list of careers into the grid
  function renderCareers(list) {
    careerGrid.innerHTML = "";
    if (!list || list.length === 0) {
      const msg = document.createElement("p");
      msg.className = "no-results";
      msg.textContent = "No careers match your search/filter.";
      careerGrid.appendChild(msg);
      return;
    }

    list.forEach((career) => {
      const card = createCard(career);
      careerGrid.appendChild(card);
    });
  }

  // Apply current filters and search query
  function applyFilters() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const field = (fieldFilter?.value || "all").toLowerCase();

    const filtered = careers.filter((career) => {
      // Field filter
      if (field && field !== "all" && (career.field || "").toLowerCase() !== field) return false;

      // Search query filter: match title, description, subjects, skills, universities, id
      if (!query) return true;
      const haystack = [career.title, career.description, career.id, career.field, (career.skills || []).join(" "), (career.subjects || []).join(" "), (career.universities || []).join(" ")]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.indexOf(query) !== -1;
    });

    renderCareers(filtered);
  }

  // Setup listeners
  if (searchInput) searchInput.addEventListener("input", applyFilters);
  if (fieldFilter) fieldFilter.addEventListener("change", applyFilters);

  // Initial render
  renderCareers(careers);
});
