function searchCase() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  const matches = cases.filter(c =>
    c.title.toLowerCase().includes(input) ||
    c.keywords.some(k => k.toLowerCase().includes(input))
  );

  if (matches.length > 0) {
    resultDiv.innerHTML = matches.map(c => `
      <div class="case-card">
        <h2>${c.title}</h2>
        <p><strong>Court:</strong> ${c.court}</p>
        <p><strong>Year:</strong> ${c.year}</p>
        <p><strong>Category:</strong> ${c.category}</p>
        <p><strong>Facts:</strong> ${c.facts}</p>
        <p><strong>Issue:</strong> ${c.issue}</p>
        <p><strong>Judgment:</strong> ${c.judgment}</p>
        <p><strong>Significance:</strong> ${c.significance}</p>
        <hr>
      </div>
    `).join("");
  } else {
    resultDiv.innerHTML = "<p>No related cases found.</p>";
  }
}