async function loadComponent(id, file) {
  const response = await fetch(file);

  const html = await response.text();

  document.getElementById(id).innerHTML = html;
}
loadComponent("sidebar", "../assets/components/sidebar.html");
loadComponent("header", "../assets/components/header.html");
loadComponent("footer", "../assets/components/footer.html");
