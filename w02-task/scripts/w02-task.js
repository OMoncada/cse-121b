/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Oscar A. Moncada";
let currentYear = 2023;
let profilePicture = "images/Person.png";


/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile Image of ${fullName}`);




/* Step 5 - Array */
favoriteFoods = ["Rice", "Meat with vegetables", "Salad", "lentils", "Chips"];
foodElement.textContent = favoriteFoods;
addFavFood = "chocolate cakes";
favoriteFoods.push(addFavFood);
foodElement.innerHTML += `<br> ${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br> ${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br> ${favoriteFoods}`;