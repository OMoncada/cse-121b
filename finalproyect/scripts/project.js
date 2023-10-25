/* W07: Final Project*/

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    let article = document.createElement("article");
    let h4 = document.createElement("h4"); // Agrega un elemento h4 para el título
    h4.textContent = temple.exerciseName; // Establece el título del ejercicio
    h4.style.fontSize = "20px"; 
    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.location);
    let description = document.createElement("p");
    description.textContent = temple.description;
    article.appendChild(h4); // Agrega el título h4 encima de la imagen
    article.appendChild(img);
    article.appendChild(description);
    templesElement.appendChild(article);
  });
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch("exercises.json"); // Cambia la URL a "temples.json"
  templeList = await response.json();
  displayTemples(templeList);
};

/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
};

/* button Function */
const button = (temples) => {
  reset();
  let filter = document.querySelector("#button").value;
  switch (filter) {
    case "Resis":
      displayTemples(
        temples.filter((temple) => temple.location.includes("Resis"))
      );
      break;
    case "Streng":
      displayTemples(
        temples.filter((temple) => temple.location.includes("Streng"))
      );
      break;
      case "Bala":
      displayTemples(
        temples.filter((temple) => temple.location.includes("Bala"))
      );
      break;
    case "Flexi":
      displayTemples(
        temples.filter((temple) => temple.location.includes("Flexi"))
      );
      break;
    case "all":
      displayTemples(temples);
      break;
  }
};

getTemples();

/* Event Listener */
document
  .querySelector("#button")
  .addEventListener("change", () => button(templeList));