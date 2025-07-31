document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("calendarContainer");
  const filters = document.getElementById("filters");
  const listContainer = document.getElementById("asociadosListContainer");
  container.innerHTML = "<p>✅ Calendario cargado correctamente</p>";
  listContainer.innerHTML = "<p>✅ Lista de asociados precargada</p>";
  filters.style.display = "block";
});
