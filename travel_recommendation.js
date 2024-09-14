// Function to Show Home Section
function showHome() {
    document.getElementById('home-section').classList.add('active');
    document.getElementById('about-section').classList.remove('active');
    document.getElementById('contact-section').classList.remove('active');
}

// Function to Show About Section
function showAbout() {
    document.getElementById('home-section').classList.remove('active');
    document.getElementById('about-section').classList.add('active');
    document.getElementById('contact-section').classList.remove('active');
}

// Function to Show Contact Section
function showContact() {
    document.getElementById('home-section').classList.remove('active');
    document.getElementById('about-section').classList.remove('active');
    document.getElementById('contact-section').classList.add('active');
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Grab form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple alert confirmation
    alert('Thank you for reaching out! We will get back to you soon.');
    
    // Reset the form
    document.getElementById('contact-form').reset();
});
// Fetch the JSON data when the page loads
let travelData = {};

// Fetch the JSON data when the page loads
document.addEventListener('DOMContentLoaded', function() {
    fetch('./travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            travelData = data;
            console.log('Data fetched successfully:', travelData);
        })
        .catch(error => console.error('Error fetching data:', error));
});

// Function for the search button
// Function for the search button
function searchFunction() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    
    // Check if input is being captured
    console.log("Search Input:", input);
    
    // Check if travelData is loaded
    console.log("Travel Data:", travelData);

    var filteredResults = [];
    
    // Check if travelData exists and has items
    if (travelData && travelData.length > 0) {
        for (var i = 0; i < travelData.length; i++) {
            var item = travelData[i];

            // Assuming you are searching the destination or description
            if (item.destination.toLowerCase().includes(input) || 
                item.description.toLowerCase().includes(input)) {
                filteredResults.push(item);
            }
        }

        console.log("Filtered Results:", filteredResults);
    } else {
        console.error("travelData is not loaded or empty");
    }
    
    displayResults(filteredResults);
}

// Function for the clear button
function clearFunction() {
    document.getElementById('searchInput').value = '';  // Clear the search input field
    document.getElementById('results').innerHTML = '';  // Clear the displayed results
    console.log('Search input and results cleared.');
}