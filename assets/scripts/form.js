function addListItem(text) {

    // Get a reference to the container
    const container = document.getElementById("container")

    // Create a li element
    const newElement = document.createElement("li")

    // Add the text to it
    newElement.textContent = text

    // Actually add the element to the page
    container.appendChild(newElement)
}

function handleFormSubmit (e) {

    // Stop the page refreshing
    e.preventDefault()

    // Get reference to the form
    const form = e.target

    // Log the values
    addListItem(form.name.value)
    addListItem(form.age.value)

}





document.getElementById("identity-form").addEventListener("submit", handleFormSubmit)