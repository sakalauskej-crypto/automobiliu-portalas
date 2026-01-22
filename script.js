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

    if (name.length < 3) {
        alert("Klaida: Automobilio pavadinimas turi būti ne trumpesnis nei 3 simboliai!");
        return; 
    }

    if (price.length <= 0) {
        alert ("Klaida: per maza kaina");
        return;
    }

    if (fuel === "Benzinas") {
        carCard.classList.add("benzinas");
    }

    if (fuel === "dyzelinas") {
        carCard.classList.add("dyzelinas");
    }

    if (fuel === "Elektra") {
        carCard.classList.add("elektra");
    }

// papildau kortele informacija
    carCard.innerHTML = `
    <img src= ${image} alt="car">
    <h3> ${name}</h3>
    <p> Automobilio kaina: ${price}</p>
    <p>Automobilio kuras: ${fuel} </p>
    <p> Automobilio pagaminimo metai: ${year} </p>
    <button class="delete-btn">Istrinti</button>
`;

const deleteBtn = carCard.querySelector(".delete-btn");
deleteBtn.addEventListener("click", function() {
    carCard.remove(); 
});

carsDiv.appendChild(carCard);

//  atstatyti forma i pradine padeti
carForm.reset();
});



