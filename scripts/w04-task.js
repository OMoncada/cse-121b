// Declare the object literal myProfile
let myProfile = {};

// Add properties to the object
myProfile.name = "Oscar Moncada";
myProfile.photo = "images/Person.png";
myProfile.favoriteFoods = [
  "Rice",
  "Meat with vegetables",
  "Salad",
  "Lentils",
];
myProfile.hobbies = ["Play Soccer", "Go out with my family", "Cook"];
myProfile.placesLived = [];

// Add objects to the placesLived array
myProfile.placesLived.push({
  place: "Táchira, Venezuela",
  length: "23 years"
});

myProfile.placesLived.push({
  place: "Valdivia, Chile",
  length: "5 years"
});

myProfile.placesLived.push({
  place: "Melbourne, Australia",
  length: "7 months"
});

// Update the DOM

// Name
document.querySelector("#name").textContent = myProfile.name;

// Photo
const photoElement = document.querySelector("#photo");
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

// Favorite Foods
const favoriteFoodsList = document.querySelector("#favorite-foods");
myProfile.favoriteFoods.forEach(food => {
  const li = document.createElement("li");
  li.textContent = food;
  favoriteFoodsList.appendChild(li);
});

// Hobbies
const hobbiesList = document.querySelector("#hobbies");
myProfile.hobbies.forEach(hobby => {
  const li = document.createElement("li");
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});

// Places Lived
const placesLivedList = document.querySelector("#places-lived");
myProfile.placesLived.forEach(place => {
  const dt = document.createElement("dt");
  dt.textContent = place.place;
  const dd = document.createElement("dd");
  dd.textContent = place.length;
  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});
