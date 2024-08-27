const loaderContainer = document.querySelector(".loader-container");
window.addEventListener("load", () => {
  loaderContainer.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const characterList = document.querySelector(".characterList");
  const searchBox = document.getElementById("searchBox");

  fetch();

  searchBox.addEventListener("input", () => {
    const query = searchBox.value.trim();
    if (query.length > 0) {
      FetchData(query);
    } else {
      fetch();
    }
  });

  async function fetch(query = "") {
    const url = `https://rickandmortyapi.com/api/character?name=${query}`;
    const response = await axios.get(url);
    const data = response.data.results;
    showInUI(data, characterList);
  }

  function showInUI(list, container) {
    container.innerHTML = "";
    list.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add(
        "card",
        "flex",
        "justify-between",
        "items-center",
        "px-4",
        "py-2",
        "bg-bgPrimary",
        "w-full",
        "h-[100px]",
        "rounded-xl"
      );
      card.innerHTML = `
               <img src= ${
                 item.image
               } alt="" class="w-[90px] h-full rounded-lg">
            <div class="characterInfo flex flex-col justify-evenly items-center gap-2">
                <h3 class="text-xl">${item.gender === "Male" ? "👨" : "👩"} ${
        item.name
      }</h3>
                <span class="text-lg">${item.status === "Alive" ? "💙" : "🖤"}${
        item.status
      }_${item.species}</span>
            </div>
            <i class="fas fa-eye text-red-600"></i>
            `;
      container.appendChild(card);
    });
  }

  let timeout;
  function FetchData(query) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fetch(query);
    }, 300);
  }
});
