const url = "https://zoo-animal-api.herokuapp.com/animals/rand"

function displayAnimal(data) {

    // Get a reference to the div
    const display = document.getElementById("display")

    // Put the animal's name to the div
    //display.textContent = data["name"]

    // Put the animal's name and latin name to the div
    display.innerHTML = `<h2>${data["name"]} (<em>${data["latin_name"]}</em>)</h2>`

    // Make a new div element
    // const elem = document.createElement("div")

    // Add the animal's name to the div
    // elem.textContent = data["name"]

    // // Add it to the parent
    // parent.appendChild(elem)

}

// Make a request for the data using fetch
fetch(url) // returns a promise
    .then((response) => response.json()) // returns another promise
    .then((data) => displayAnimal(data))