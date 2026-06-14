function filterTimeline(category) {
  const entries = document.querySelectorAll(".timeline-entry");

  entries.forEach((entry) => {
    const categories = entry.dataset.category;

    if (category === "all" || categories.includes(category)) {
      entry.style.display = "grid";
    } else {
      entry.style.display = "none";
    }
  });
}