window.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  console.log(nav);
  nav.innerHTML = `
  <h2>Hello DOM</h2>
  <p>This is HTML within a JS string</p>`;
});
