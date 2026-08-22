document.querySelectorAll('[data-current-year]').forEach((item) => {
  item.textContent = new Date().getFullYear();
});
