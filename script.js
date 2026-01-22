const carForm = document.getElementById("carForm");
const carsDiv = document.getElementById("cars");

carForm.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log("forma paspausta");
// 
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;
    const fuel = document.getElementById("fuel").value;
    const year = document.getElementById("year").value;

    //  sukuriu automobilio kortele
    const carCard = document.createElement("div");
    carCard.className = "car-card";

// papildau kortele informacija
    carCard.innerHTML = `
    <img src= ${image} alt="car">
    <h3> ${name}</h3>
    <p> Automobilio kaina: ${price}</p>
    <p>Automobilio kuras: ${fuel} </p>
    <p> Automobilio pagaminimo metai: ${year} </p>
    <button class="delete-btn">Ištrinti</button>
`;

const deleteBtn = carCard.querySelector(".delete-btn");
deleteBtn.addEventListener("click", function() {
    carCard.remove(); 
});

carsDiv.appendChild(carCard);

//  atstatyti forma i pradine padeti
carForm.reset();
});



